import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input({ required: true }) element: {
    type: string;
    name: string;
    content: string;
  } = { type: 'type', name: 'type', content: 'type' };
  @Input({ required: true }) name: string;

  constructor() {
    console.log('Constractor called !');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called !', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called !');
  }
}
