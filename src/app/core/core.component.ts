import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {
  @Output() serverCreated: any = new EventEmitter<any>();
  @Output() bluePrintCreated: any = new EventEmitter<any>();

  onServerCreated () {
    this.serverCreated.emit();
  }

  onBluePrintCreated() {
    this.bluePrintCreated.emit();
  }
}
