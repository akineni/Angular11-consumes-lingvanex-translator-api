import { Component, OnInit } from '@angular/core';
import data from './quick-learn-data.json'
import { AudioService } from 'src/app/services/audio.service';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-quick-learn',
  templateUrl: './quick-learn.component.html',
  styleUrls: ['./quick-learn.component.css']
})
export class QuickLearnComponent implements OnInit {

  env = environment
  quickLearnData?: any = data

  constructor(
    public audioService: AudioService,
    private title: Title
  ) { }
  
  ngOnInit(): void {
    this.title.setTitle(environment.pt + ": Quick Learn")
  }

}
