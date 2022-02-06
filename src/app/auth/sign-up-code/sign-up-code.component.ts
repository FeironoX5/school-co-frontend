import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-up-code',
  templateUrl: './sign-up-code.component.html',
  styleUrls: ['./sign-up-code.component.css']
})
export class SignUpCodeComponent {
  code = ['', '', '', ''];

  constructor(private router: Router, public auth: AuthService, private _location: Location) {
  }

  checkBackspace(nowFieldId: number, event: any) {
    if (event.keyCode === 8 && this.code[nowFieldId].length == 0) {
      const nextField = <HTMLInputElement>document.getElementById('c' + Math.max(0, nowFieldId - 1).toString());
      nextField.focus();
    }
  }

  focusNext(nowFieldId: number) {
    const nowField = <HTMLInputElement>document.getElementById('c' + nowFieldId.toString());
    const nextField = <HTMLInputElement>document.getElementById('c' + (nowFieldId + 1).toString());
    const [first, ...rest] = (this.code[nowFieldId] ?? '').toString();
    this.code[nowFieldId] = first ?? '';
    nowField.value = first ?? '';
    const lastInputBox = nowFieldId == 3;
    const insertedContent = first != undefined;
    if (insertedContent && !lastInputBox) {
      nextField.focus();
      this.code[nowFieldId + 1] = rest.join('');
      nextField.value = rest.join('');
    }
  }

  back() {
    this._location.back();
  }

  next() {
    if (this.code[0] && this.code[1] && this.code[2] && this.code[3]) {
      this.auth.signUpWithCode(this.code.join(''));
    }
  }
}
