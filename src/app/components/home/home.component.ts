import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs'
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  env = environment

  constructor(
    private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(environment.pt + ": Home")

    get('assets/js/anime-main.js', () => {})
  }

}
