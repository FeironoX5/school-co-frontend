import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  authForm: FormGroup;

  constructor(private fb: FormBuilder, public auth: AuthService, private _location: Location) {
    this._createForm();
  }

  private _createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
    });
  }

  get _email() {
    return this.authForm.get('email');
  }

  get _password() {
    return this.authForm.get('password');
  }

  back() {
    this._location.back();
  }

  next() {
    if (this.authForm.valid) {
      this.auth.signIn(this._email?.value, this._password?.value);
    }
  }

}
