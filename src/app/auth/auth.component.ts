import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigateByUrl('auth/sign-in')
  }
}
