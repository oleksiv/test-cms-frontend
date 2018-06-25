import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PostsComponent} from './components/posts/posts.component';
import {PostEditComponent} from './components/posts/post-edit/post-edit.component';
import {GuestGuardService} from './services/guest-guard/guest-guard.service';
import {PostCreateComponent} from './components/posts/post-create/post-create.component';
import {PostIndexComponent} from './components/posts/post-index/post-index.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryIndexComponent} from './components/categories/category-index/category-index.component';
import {CategoryCreateComponent} from './components/categories/category-create/category-create.component';
import {CategoryEditComponent} from './components/categories/category-edit/category-edit.component';
import {TagsIndexComponent} from './components/tags/tags-index/tags-index.component';
import {TagsComponent} from './components/tags/tags.component';
import {TagCreateComponent} from './components/tags/tag-create/tag-create.component';
import {TagEditComponent} from './components/tags/tag-edit/tag-edit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [GuestGuardService]},
  {
    path: 'posts', component: PostsComponent, canActivate: [AuthGuardService], children: [
      {path: 'create', component: PostCreateComponent},
      {path: ':id/edit', component: PostEditComponent},
      {path: '', component: PostIndexComponent}
    ]
  },
  {
    path: 'categories', component: CategoriesComponent, canActivate: [AuthGuardService], children: [
      {path: 'create', component: CategoryCreateComponent},
      {path: ':id/edit', component: CategoryEditComponent},
      {path: '', component: CategoryIndexComponent}
    ]
  },
  {
    path: 'tags', component: TagsComponent, canActivate: [AuthGuardService], children: [
      {path: 'create', component: TagCreateComponent},
      {path: ':id/edit', component: TagEditComponent},
      {path: '', component: TagsIndexComponent}
    ]
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
