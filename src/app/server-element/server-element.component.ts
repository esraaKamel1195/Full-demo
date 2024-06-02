import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input({ required: true }) element: {
    type: string;
    name: string;
    content: string;
  } = { type: 'type', name: 'name', content: 'content' };
  @Input({ required: true }) name: string;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('contentTag', { static: true }) content: ElementRef;

  constructor() {
    // console.log('Constractor called !');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called !', changes);
  }

  ngOnInit(): void {
    // console.log('ngOnInit called !');
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("Test header content is", this.heading.nativeElement.textContent );
  }

  ngAfterContentInit(): void {
    console.log("Test content is", this.content.nativeElement.textContent );
  }
}
