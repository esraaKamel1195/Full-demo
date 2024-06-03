import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts = [
    {
      name: 'Master account',
      status: 'Active',
    },
    {
      name: 'Test account',
      status: 'inactive',
    },
    {
      name: 'Hidden account',
      status: 'unknown',
    },
  ];

  constructor() { }

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
