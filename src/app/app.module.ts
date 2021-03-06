import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    PagesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
