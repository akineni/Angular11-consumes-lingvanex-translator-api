import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators'
import { PreLoaderService } from './services/pre-loader.service';
import { get } from 'scriptjs'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  env = environment

  constructor(private router: Router, public preLoader: PreLoaderService) { 
    router.events.pipe(
      filter(value => {
        if (value instanceof NavigationStart || value instanceof NavigationEnd || 
          value instanceof NavigationCancel || value instanceof NavigationError)
            return true
          else
            return false
      })).subscribe(event => {
        if (event instanceof NavigationStart)
          this.preLoader.loading = true
        else
          this.preLoader.loading = false
      })
  }

  ngOnInit(): void {
    
    get('assets/js/main.js', () => {})

  }
  
}
