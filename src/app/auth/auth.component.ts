import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  error: any = null;

  onRaiseError() {
    this.error = null;
  }

  onErrorHandle() {
    this.error = 'An error occured in typescript';
  }
}
