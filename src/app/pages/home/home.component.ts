import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paginaInicial:Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  irPaginaInicial()
  {
    this.paginaInicial = true
  }

  ifPaginaQuiz()
  {
    this.paginaInicial = false
  }

}
