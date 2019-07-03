import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { ButtonColorDirective } from './button-color.directive';
import { SearchIconDirective } from './search-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    ButtonColorDirective,
    SearchIconDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
