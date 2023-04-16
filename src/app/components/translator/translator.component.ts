import { Component, OnInit } from '@angular/core';
import { TranslatorService } from 'src/app/services/translator.service';
import { ActivatedRoute } from '@angular/router';
import { FeignedCacheService } from 'src/app/services/feigned-cache.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  languages?: any

  constructor(
    public translatorService: TranslatorService,
    private activatedRoute: ActivatedRoute,
    public feignedCacheService: FeignedCacheService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: any) => {
        this.languages = data.languages.result
      }
    )
   }

  translate(): void {
    if(this.feignedCacheService.dataInput.length != 0)
      this.translatorService.translate(
        this.feignedCacheService.srcInput,
        this.feignedCacheService.targetInput,
        this.feignedCacheService.dataInput
      )
  }

}
