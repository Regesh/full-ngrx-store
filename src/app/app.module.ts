import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './effects/layout.effect';

import { HomeComponent } from './components/home.component';
import { SecondaryComponent } from './components/secondary.component';

import { PageLoadGuard } from './guards/page-load.guard';
import { HomePageLoadGuard } from './guards/home-page-load.guard';

import { HttpClientModule }    from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'second', component: SecondaryComponent, canActivate: [PageLoadGuard, HomePageLoadGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([LayoutEffects]),
    RouterModule.forRoot(routes)
  ],
  providers: [
    ConfigService,
    PageLoadGuard,
    HomePageLoadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
