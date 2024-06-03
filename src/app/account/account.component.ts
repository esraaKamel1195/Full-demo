import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged: EventEmitter<{ id: number; newStatus: string }> =
    new EventEmitter<{ id: number; newStatus: string }>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // console.log("A server status changed , new status: ", status);
    // const loggingService = new LoggingService();
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }

}
