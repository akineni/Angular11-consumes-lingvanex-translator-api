import { Injectable } from '@angular/core';
import { PreLoaderService } from './pre-loader.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeignedCacheService } from './feigned-cache.service';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  baseURL: string = 'https://api-b2b.backenster.com/b1/api/v3'
  apiKey: string = 'a_uVrOKOmIQCXHgfwae7S9kGvuSXlyqlOcAEFPz8ZFXWhYHd30F5u1in2lgkv3oO2uBoLtIsfeeN8y9HWK'

  constructor(
    private preLoader: PreLoaderService,
    private http: HttpClient,
    public feignedCacheService: FeignedCacheService
  ) { }

  translate(srcLang: string, targetLang: string, data: string) {

    this.preLoader.loading = true

    this.http.post<any>( this.baseURL + '/translate',
      {
        from: srcLang,
        to: srcLang != 'yo_NG' ? 'yo_NG' : targetLang,
        data: data,
        platform: 'api',
        enableTransliteration: true
      },
      {
        headers: {
          'Authorization': 'Bearer ' + this.apiKey,
          'Content-Type': 'application/json'
        }
      }
    ).subscribe(
      data => {
        this.feignedCacheService.result = data.result
        this.preLoader.loading = false
      },
      error => {
        //send feedback
        this.preLoader.loading = false
      })

  }

  getLanguages(): Observable<any> {
    return this.http.get<object>(this.baseURL + '/getLanguages?platform=api',
      {
        headers: {
          'Authorization': 'Bearer ' + this.apiKey,
          'Accept': 'application/json'
        }
      })
  }
}
