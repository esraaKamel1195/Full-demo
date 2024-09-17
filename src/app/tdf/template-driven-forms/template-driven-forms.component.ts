import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from './user';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css',
})
export class TemplateDrivenFormsComponent {
  @ViewChild('registerForm', { static: true }) signUpForm: NgForm;
  defaultQuestion: string = 'doctor';
  answer: string = '';
  genders: Array<String> = ['Male', 'Female'];
  isSubmitted: boolean = false;
  user: {
    username: string;
    email: string;
    secretQuestion: string;
    answer: string;
    gender: string;
  } = { username: '', email: '', secretQuestion: '', answer: '', gender: '' };

  userDataObject = new UserData('', '', '', '', '');

  suggestedUsername() {
    const suggestedUsername = 'Username for test';

    // this.signInForm.setValue({});

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedUsername,
      },
    });
  }

  onSubmit(registerForm: HTMLFormElement | NgForm) {
    // console.log("Form Submitted !!!");
    // console.log('registerForm', registerForm);
    this.isSubmitted = true;
    console.log('signUpForm', this.signUpForm);
    console.log('default question is', this.defaultQuestion);

    this.userDataObject.username = this.signUpForm.value.userData.username;
    this.userDataObject.email = this.signUpForm.value.userData.email;
    this.userDataObject.secret = this.signUpForm.value.userData.secret;
    this.userDataObject.answer = this.signUpForm.value.questionAnswer;
    this.userDataObject.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
