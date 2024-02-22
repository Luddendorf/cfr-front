import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TextColor } from './text-color.enum';

@Component({
  selector: 'cfr-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent implements AfterViewInit {
  legendColor: TextColor;
  colorOfText = ['square__yellow'];

  squareWidth: string = '50';
  squareHeight: string = '50';

  @ViewChild('myCircle')
  myCircle: ElementRef;

  ngAfterViewInit(): void {
    // console.log(this.myCircle.nativeElement.classList);
    this.myCircle.nativeElement.classList.add('circle__green');
  }

  setTextColor(color: string): void {
    this.legendColor = color as TextColor;
  }

  setSquareWidth(event: any): void {
    this.squareWidth = event.target.value;
  }

  setSquareHeight(event: any): void {
    this.squareHeight = event.target.value;
  }
}
