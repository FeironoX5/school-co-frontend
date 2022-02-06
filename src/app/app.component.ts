import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./data-services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router, public userData: UserService) {
  }
}
