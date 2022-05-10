import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { DetailProfileComponent } from './components/detail-profile/detail-profile.component';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'course', component: ListCourseComponent },
    { path: 'user-login', component: UserLoginComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ListContactComponent },
    { path: 'profiles', component: ListProfilesComponent },
    { path: 'profiles/:pid', component: DetailProfileComponent },
    { path: 'rxjs', component: ReactiveComponent },
    { path: 'template-form', component: TemplateFormComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
