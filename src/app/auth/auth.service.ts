import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../data-services/user.service";

@Injectable()
export class AuthService {
  isAuthenticated = false;

  constructor(private router: Router, private userData: UserService) {
    const email = localStorage.getItem('authEmail');
    const password = localStorage.getItem('authPassword');
    if (email && password && this.signIn(email, password)) {
      this.isAuthenticated = true;
    } else {
      this.userData.clearUserData();
    }
  }

  signIn(email: string, password: string) {
    const result = true;  // ask backend
    if (result) {
      this.signSuccess('X', 'X', email, password); // ask backend
    } else {
      this.userData.clearUserData();
    }
    return result;
  }

  signUp(fio: string, school: string, email: string, password: string) {
    const result = true;  // ask backend
    if (result) {
      this.signSuccess(fio, school, email, password);
    } else {
      this.userData.clearUserData();
    }
    return result;
  }

  signUpWithCode(code: string) {
    const result = true;  // ask backend
    if (result) {
      this.signSuccess('', '', '', '');
    } else {
      this.userData.clearUserData();
    }
    return result;
  }

  signSuccess(fio: string, school: string, email: string, password: string) {
    this.isAuthenticated = true;
    this.userData.setUserData('Флексов Аксолотль Аксолотлевич', 'Школа Лучшая в мире', 'helloworld@what.com', 'password', 0, 'https://pa1.narvii.com/7123/04cec3026d8df4859b32817994476c682e22b16fr1-848-954_hq.gif');
    // this.userData.setUserData(fio, school, email, password, 0, '');
    this.router.navigateByUrl('profile');
    // this.router.navigateByUrl('dashboard');
  }

  signOut() {
    this.router.navigateByUrl('auth')
    this.isAuthenticated = false;
    this.userData.clearUserData();
  }

  deleteAccount() {
    // delete
    this.signOut();
  }
}
