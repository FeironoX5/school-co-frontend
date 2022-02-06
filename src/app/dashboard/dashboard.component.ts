import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Response {
  msg: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  openAction() {
    const action = <HTMLInputElement>document.getElementById('action');
    const content = <HTMLInputElement>document.getElementById('action-content');
    const loading = <HTMLInputElement>document.getElementById('action-loading');
    const results = <HTMLInputElement>document.getElementById('action-results');
    this.result = 'Ждём пока дойдёт посылочка...';
    this.http.post<Response>('https://randomall.ru/api/custom/gens/279', {}).subscribe(
      value => {
        this.result = value.msg;
      }
    )
    action.style.width = '100vw';
    action.style.margin = '0';
    action.style.borderRadius = '0';
    content.style.display = 'none';
    loading.style.display = 'block';
    setTimeout(() => {
      if (this.result == 'Сочинение о том') {
        this.moreAction();
      } else {
        loading.style.display = 'none';
        results.style.display = 'block';
      }
    }, 4000);

  }

  moreAction() {
    const loading = <HTMLInputElement>document.getElementById('action-loading');
    const results = <HTMLInputElement>document.getElementById('action-results');
    results.style.display = 'none';
    loading.style.display = 'block';
    this.result = 'Ждём пока дойдёт посылочка...';
    this.http.post<Response>('https://randomall.ru/api/custom/gens/279', {}).subscribe(
      value => {
        this.result = value.msg;
      }
    )
    setTimeout(() => {
      if (this.result == 'Сочинение о том') {
        this.moreAction();
      } else {
        loading.style.display = 'none';
        results.style.display = 'block';
      }
    }, 4000);
  }
}
