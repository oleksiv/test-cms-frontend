import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '', component: TestComponent,
  },
  {
    path: 'login', component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token')
        },
      }
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
