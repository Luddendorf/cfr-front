import { DOCUMENT } from '@angular/common';
import { Inject, Component, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { BorderRadius } from '../../interfaces/border-radius';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TypeaheadResponse } from '../../interfaces/typeahead/typeahead-response';
import { TypeaheadService } from '../../../../services/typeahead.service';
import { HistoryResponse } from '../../interfaces/typeahead/history-response';
import { GoodsService } from '../../../../services/goods.service';

@Component({
  selector: 'cfr-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeaheadComponent implements OnInit, AfterViewInit {
  inputPlaceholder: string = 'I search...';
  searchButtonText: string = 'Find';
  userInput: string = '';
  buttonBorderRadius: BorderRadius = BorderRadius.Right;
  clearButtonClass: string = 'typeahead__clear--icon';
  voiceButtonClass: string = 'typeahead__voice--icon';
  searchForm: FormGroup<any>;
  showClearButton: boolean = false;
  showSuggestions: boolean = false;
  searchInputSub: Subscription | undefined;
  historyList: HistoryResponse[] = [];
  items: number[] = [1, 2, 3, 4, 5, 6];
  hints: TypeaheadResponse | undefined;
  typeaheadSub: Subscription | undefined;
  historySub: Subscription | undefined;

  constructor(@Inject(DOCUMENT) private document: Document,
              private fb: FormBuilder,
              private typeaheadService: TypeaheadService,
              private goodsService: GoodsService) {
    this.searchForm = this.fb.group({'searchInput': ['']});
  }

  ngOnInit(): void {
    this.historySub = this.typeaheadService.getHistory$()
    .subscribe(historyList => {
      this.historyList = historyList;
    });

    this.searchInputSub = this.searchForm.get('searchInput')?.valueChanges
    .pipe(
      tap(userInput => {
        if (!userInput) {
          this.showSuggestions = false;
          this.hints = undefined;
        }
        this.userInput = userInput;
        this.showClearButton = userInput ? true : false;
      }),
      filter(userInput => userInput.length >= 2),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(userInput => {
        this.userInput = userInput;
        return this.typeaheadService.getSuggestionsMock$(userInput)
      }),
    ).subscribe(hints => {
        this.hints = hints;
        this.showSuggestions = true;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.searchInputSub?.unsubscribe();
    if (this.typeaheadSub) {
      this.typeaheadSub.unsubscribe();
    }
    if (this.historySub) {
      this.historySub.unsubscribe();
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

  onSearchInputFocus(): void {
    this.showSuggestions = true;
  }

  onSearchInputBlur(): void {
    this.showSuggestions = false;
  }

  clearSearch(): void {
    this.searchForm.get('searchInput')?.setValue('');
  }

  hideSuggestions(): void {
    this.showSuggestions = false;
  }

  removeHistoryRecord(recordIndex: number, event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.historyList.splice(recordIndex, 1);
  }

  removeAllHistory(): void {
    this.historyList = [];
  }
  
  startSearch(): void {
    if (!this.userInput) {
      return;
    }
    this.goodsService.searchPhrase$.next(this.userInput);
  }
}
