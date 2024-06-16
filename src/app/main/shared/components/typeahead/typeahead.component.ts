import { DOCUMENT } from '@angular/common';
import { Inject, Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { BorderRadius } from '../../interfaces/border-radius';

@Component({
  selector: 'cfr-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeaheadComponent implements AfterViewInit {
  inputPlaceholder: string = 'I search...';
  searchButtonText: string = 'Find';
  buttonBorderRadius: BorderRadius = BorderRadius.Right;
  clearButtonClass: string = 'typeahead__clear--icon';
  voiceButtonClass: string = 'typeahead__voice--icon';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
   // this.listenUserInput();
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
