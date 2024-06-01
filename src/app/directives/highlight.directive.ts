import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'highlight'
})
export class HighlightDirective {
  @Input({ required: true }) isHighlighted: boolean = false;
  @Output() toggleHighLight = new EventEmitter();

  constructor() {
  }

  // @HostBinding('className') get cssClass () { return 'highlighted' };
  // or
  @HostBinding('class.highlighted') get cssClass() {
    return this.isHighlighted;
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.isHighlighted = true;
    this.toggleHighLight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.isHighlighted = false;
    this.toggleHighLight.emit(this.isHighlighted);
  }
  toggle(eventData: Event) {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighLight.emit(this.isHighlighted);
  }
}
