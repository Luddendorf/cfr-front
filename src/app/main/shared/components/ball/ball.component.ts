import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'cfr-ball',
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
          color: 'green',
          fontSize: '32px',
          paddingLeft: '0px'
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
          color: 'red',
          fontSize: '20px',
          paddingLeft: '200px'
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')])
    ])
  ]
})
export class BallComponent {
  isOpen = true;
  arrayForChild: number[] = [1];
  objectForChild: any = {};
  toggle() {
    this.isOpen = !this.isOpen;
  }
  updateChild() {
    this.arrayForChild.push(2);
    this.arrayForChild = [...this.arrayForChild, 2];
    this.objectForChild = {...this.objectForChild, name: 'John'};
  }
}
