import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable, of, empty } from 'rxjs';
import { TranslatorService } from '../services/translator.service';
import { FeignedCacheService } from '../services/feigned-cache.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguagesResolver implements Resolve<any> {

  constructor(
    private translatorService: TranslatorService,
    private feignedCacheService: FeignedCacheService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return (this.feignedCacheService.languages) ? of(this.feignedCacheService.languages) :
    this.translatorService.getLanguages().pipe(
      catchError(e => {
        if(!navigator.onLine) this.router.navigateByUrl('/error')
        return empty()
      }),
      tap( data => this.feignedCacheService.languages = data )
    )
  }
}
