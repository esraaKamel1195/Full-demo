import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit {

  registerationForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerationForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        state: new FormControl(''),
        city: new FormControl(''),
        postalCode: new FormControl('')
      })
    });
  }


  onLoadData() {
    // use setValue function
    // this.registerationForm.setValue({
    //   username: "Abanoub Nabil",
    //   password: "123456",
    //   confirmPassword: "123456",
    //   address: {
    //     state: "Egypt",
    //     city: "Assiut",
    //     postalCode: "71717"
    //   }
    // });

    // use patchValue method
    this.registerationForm.patchValue({
      username: "Abanoub Nabil",
      address: {
        state: "Egypt",
        city: "Assiut",
        postalCode: "71717"
      }
    });
  }
}
