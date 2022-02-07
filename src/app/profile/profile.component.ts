import { Component, OnInit } from '@angular/core';
import {UserService} from "../data-services/user.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  settings = [
    {title: 'Данные пользователя', inputs: ['Фамилия', 'Имя', 'Отчество']},
    {title: 'Контактная информация', inputs: ['Почта', 'Телефон', 'Ссылка на ВКонтакте']},
    {title: 'Прикрепление к учителю', inputs: ['Введите ссылку на страницу учителя']},
    {title: 'Прикрепление к школе', inputs: ['Введите код школы']},
  ];
  activeIndex = -1;
  approveOpen = false;

  constructor(public userData: UserService, public auth: AuthService) { }

  ngOnInit(): void {
  }

}
