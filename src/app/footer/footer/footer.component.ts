import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'cfr-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  @Input() phoneNumber: string = '(097) 123-45-67';

  @Output() userMark: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef,
              private footerService: FooterService) {}


  handleUserEstimate(event: any): void {
    this.userMark.emit(event.target.value);

    this.footerService.setUserRemark(event.target.value);
  } 
}
