import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {SimplemdeModule, SIMPLEMDE_CONFIG} from 'ng2-simplemde'
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from "./auth-guard.service";
import {GuestGuardService} from "./guest-guard.service";
import {PostsComponent} from './posts/posts.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {PostIndexComponent} from './posts/post-index/post-index.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FeaturedImageComponent} from './shared/featured-image/featured-image.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [GuestGuardService]
  },
  {
    path: 'posts', component: PostsComponent, canActivate: [AuthGuardService], children: [
      {
        path: 'create', component: PostCreateComponent
      },
      {
        path: 'edit/:id', component: PostEditComponent
      },
      {
        path: '', component: PostIndexComponent
      }
    ]
  },
  {
    path: '**', redirectTo: '/login'
  }
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    PostEditComponent,
    PostCreateComponent,
    PostIndexComponent,
    SidebarComponent,
    FeaturedImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {
        spellChecker: false
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
