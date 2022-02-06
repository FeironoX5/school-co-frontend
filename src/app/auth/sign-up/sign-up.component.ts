import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  authForm: FormGroup;
  step = 0;

  constructor(private fb: FormBuilder, public auth: AuthService, private _location: Location) {
    this._createForm();
  }

  get _fio() {
    return this.authForm.get('fio');
  }

  get _school() {
    return this.authForm.get('school');
  }

  get _email() {
    return this.authForm.get('email');
  }

  get _password() {
    return this.authForm.get('password');
  }

  get _isInvalid() {
    if (this._fio && this._school && this._email && this._password) {
      if (this.step == 0) {
        return this._fio.invalid || this._school.invalid;
      } else {
        return this._email.invalid || this._password.invalid;
      }
    } else {
      return false;
    }
  }

  private _createForm() {
    this.authForm = this.fb.group({
      fio: ['', [Validators.required, Validators.pattern('[а-яА-Я]+\\ [а-яА-Я]+\\ [а-яА-Я]+')]],
      school: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
    })
  }

  back() {
    if (this.step == 0) {
      this._location.back();
    } else {
      this.step--;
    }
  }

  next() {
    if (this.step == 0) {
      if (this._fio?.valid && this._school?.valid) {
        this.step++;
      }
    } else if (this.authForm.valid) {
      this.auth.signUp(this._fio?.value, this._school?.value, this._email?.value, this._password?.value);
    }
  }


}
