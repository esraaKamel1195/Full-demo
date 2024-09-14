import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  onSubmit(registerForm: HTMLFormElement | NgForm) {
    console.log("Form Submitted !!!");
    console.log(registerForm);
  }
}
