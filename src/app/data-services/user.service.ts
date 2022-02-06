import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  fio: string;
  school: string;
  email: string;
  password: string;
  role: number;
  profileImgUrl: string;

  constructor() {
  }

  setUserData(fio: string, school: string, email: string, password: string, role: number, profileImgUrl: string) {
    this.fio = fio;
    this.school = school;
    this.email = email;
    this.password = password;
    this.role = role;
    this.profileImgUrl = profileImgUrl;
    localStorage.setItem('authEmail', email);
    localStorage.setItem('authPassword', password);
  }

  clearUserData() {
    localStorage.removeItem('authEmail');
    localStorage.removeItem('authPassword');
  }
}
