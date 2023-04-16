import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorComponent } from './components/translator/translator.component';
import { HomeComponent } from './components/home/home.component';
import { QuickLearnComponent } from './components/quick-learn/quick-learn.component';
import { LanguagesResolver } from './guards/languages.resolver';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'translator',
    component: TranslatorComponent,
    resolve: { languages: LanguagesResolver }
  },
  {
    path: 'quick-learn',
    component: QuickLearnComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
