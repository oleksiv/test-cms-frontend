import {NgModule} from '@angular/core';
import {TagInputModule} from 'ngx-chips';
import {MomentModule} from 'angular2-moment';
import {JwtModule} from '@auth0/angular-jwt';
import {RoutingModule} from './routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SimplemdeModule, SIMPLEMDE_CONFIG} from 'ng2-simplemde';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {LoginComponent} from './components/login/login.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryCreateComponent} from './components/categories/category-create/category-create.component';
import {CategoryEditComponent} from './components/categories/category-edit/category-edit.component';
import {PostEditComponent} from './components/posts/post-edit/post-edit.component';
import {PostIndexComponent} from './components/posts/post-index/post-index.component';
import {PostCreateComponent} from './components/posts/post-create/post-create.component';
import {TagsWidgetComponent} from './components/shared/tags-widget/tags-widget.component';
import {CategoryIndexComponent} from './components/categories/category-index/category-index.component';
import {CategoriesWidgetComponent} from './components/shared/categories-widget/categories-widget.component';
import {FeaturedImageWidgetComponent} from './components/shared/featured-image-widget/featured-image-widget.component';
import { PublishWidgetComponent } from './components/shared/publish-widget/publish-widget.component';
import { PostTitleComponent } from './components/shared/post-title/post-title.component';
import { PostAliasComponent } from './components/shared/post-alias/post-alias.component';
import { PostContentComponent } from './components/shared/post-content/post-content.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    CategoriesComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryIndexComponent,
    PostEditComponent,
    PostCreateComponent,
    PostIndexComponent,
    SidebarComponent,
    TagsWidgetComponent,
    CategoriesWidgetComponent,
    FeaturedImageWidgetComponent,
    PublishWidgetComponent,
    PostTitleComponent,
    PostAliasComponent,
    PostContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    MomentModule,
    RoutingModule,
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
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
