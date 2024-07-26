import { DOCUMENT } from '@angular/common';
import { Inject, Component, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subscribable, Subscription, fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { BorderRadius } from '../../interfaces/border-radius';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TypeaheadResponse } from '../../interfaces/typeahead/typeahead-response';
import { TypeaheadService } from '../../../../services/typeahead.service';

@Component({
  selector: 'cfr-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeaheadComponent implements OnInit, AfterViewInit {
  inputPlaceholder: string = 'I search...';
  searchButtonText: string = 'Find';
  buttonBorderRadius: BorderRadius = BorderRadius.Right;
  clearButtonClass: string = 'typeahead__clear--icon';
  voiceButtonClass: string = 'typeahead__voice--icon';
  searchForm: FormGroup<any>;
  showClearButton: boolean = false;
  searchInputSub: Subscription | undefined;
  items: number[] = [1, 2, 3, 4, 5, 6];
  hints: TypeaheadResponse | undefined;
  typeaheadSub: Subscription | undefined;

  constructor(@Inject(DOCUMENT) private document: Document,
              private fb: FormBuilder,
              private typeaheadService: TypeaheadService) {
    this.searchForm = this.fb.group({'searchInput': ['']});
  }

  ngOnInit(): void {
    this.searchInputSub = this.searchForm.get('searchInput')?.valueChanges
    .pipe(
      tap(userInput => {
        this.showClearButton = userInput ? true : false;
      }),
      filter(userInput => userInput.length >= 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(userInput => {
        return this.typeaheadService.getSuggestionsMock$(userInput)
      }),
    ).subscribe(hints => {
        this.hints = hints;
    });
  }

  ngAfterViewInit(): void {
   // this.listenUserInput();
  }

  ngOnDestroy(): void {
    this.searchInputSub?.unsubscribe();
    if (this.typeaheadSub) {
      this.typeaheadSub.unsubscribe();
    }
  }

  toggleClearButtonIcon(event: MouseEvent): void {
    this.clearButtonClass = event.type == 'mouseover'
      ? 'typeahead__clear--icon-hovered' : 'typeahead__clear--icon';
  }

  toggleVoiceButtonIcon(event: MouseEvent): void {
    this.voiceButtonClass = event.type == 'mouseover'
      ? 'typeahead__voice--icon-hovered' : 'typeahead__voice--icon';
  }

  getContinents = (keys: string) =>
  [
    'africa',
    'antarctica',
    'asia',
    'australia',
    'europe',
    'north america',
    'south america'
  ].filter(e => e.indexOf(keys.toLowerCase()) > -1);

  fakeContinentsRequest = (keys: string) =>
    of(this.getContinents(keys)).pipe(
      tap(_ => console.log(`API CALL at ${new Date()}`))
  );

  onSearchInputFocus(): void {

  }

  onSearchInputBlur(): void {

  }

  clearSearch(): void {
    this.searchForm.get('searchInput')?.setValue('');
  }
/*
  listenUserInput(): void {
    const intputEl: any = this.document.getElementById('type-ahead');
    const outputEl: any = this.document.getElementById('output');

    const events = fromEvent(intputEl, 'keyup').pipe(
      debounceTime(400),
      map((e: any) => e.target.value),
      distinctUntilChanged(),
      switchMap(this.fakeContinentsRequest),
      tap(c => (outputEl.innerText = c.join('\n')))
    )
    .subscribe(event => {
      console.log('Got event ' + event);
    });
  } */
}
