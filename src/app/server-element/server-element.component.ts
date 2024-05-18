import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  @Input({ required: true }) element: {
    type: string;
    name: string;
    content: string;
  } = { type: 'string', name: 'string', content: 'string' };



}
