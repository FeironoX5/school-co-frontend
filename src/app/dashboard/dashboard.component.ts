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
  tasks = [
    {
      title: 'Сложноподчинёные предложения',
      color: '248',
      images: ['https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg', 'https://i.juick.com/p/2786950.jpg', 'https://ic.pics.livejournal.com/anonimny_anonim/8583363/17069/17069_original.jpg', 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg']
    },
    {
      title: 'Сложноподчинёные предложения',
      color: '11',
      images: ['https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg', 'https://i.juick.com/p/2786950.jpg', 'https://ic.pics.livejournal.com/anonimny_anonim/8583363/17069/17069_original.jpg', 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg']
    },
    {
      title: 'Сложноподчинёные предложения',
      color: '140',
      images: ['https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg', 'https://i.juick.com/p/2786950.jpg', 'https://ic.pics.livejournal.com/anonimny_anonim/8583363/17069/17069_original.jpg', 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg']
    },
    {
      title: 'Сложноподчинёные предложения',
      color: '300',
      images: ['https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg', 'https://i.juick.com/p/2786950.jpg', 'https://ic.pics.livejournal.com/anonimny_anonim/8583363/17069/17069_original.jpg', 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg']
    },
    {
      title: 'Сложноподчинёные предложения',
      color: '0',
      images: ['https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg', 'https://i.juick.com/p/2786950.jpg', 'https://ic.pics.livejournal.com/anonimny_anonim/8583363/17069/17069_original.jpg', 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg']
    },
  ];
  errors = [
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
    {image: 'https://ds05.infourok.ru/uploads/ex/0f1b/000a966a-2ce78366/hello_html_m461bd14a.jpg'},
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  openAction() {
    const action = <HTMLInputElement>document.getElementById('action');
    const content = <HTMLInputElement>document.getElementById('action-content');
    const loading = <HTMLInputElement>document.getElementById('action-loading');
    const results = <HTMLInputElement>document.getElementById('action-results');
    this.result = 'Ждём, пока дойдёт посылочка...';
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
    this.result = 'Ждём, пока дойдёт посылочка...';
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
