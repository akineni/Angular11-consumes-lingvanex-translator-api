import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  private basePath = './assets/audio/'
  private defaultExtension = '.aac'
  private audio = new Audio()

  play(src: string, e?: Event):void {
    e?.preventDefault();

    this.audio.src = this.basePath + src + this.defaultExtension
    this.audio.load()
    this.audio.play()
  }
}
