import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
