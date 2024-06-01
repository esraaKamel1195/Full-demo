import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  @Input({required: false}) defaultColor: string;
  @Input({required: false}) highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) {
    // this.element.nativeElement.style.backgroundColor = 'lightblue';
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'lightgray');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.render.setStyle(this.element.nativeElement, 'color', 'white' );
    this.backgroundColor = this.defaultColor? this.defaultColor: 'lightgray';
    this.color = this.highlightColor? this.highlightColor: 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.element.nativeElement, 'color', 'blue' );
    this.backgroundColor = 'transparent';
    this.color = 'blue';
  }
}
