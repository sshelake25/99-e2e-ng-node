import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseComponent } from './components/course/course.component';
import { ServicesComponent } from './components/services/services.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddressComponent } from './components/address/address.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialExampleModule } from './materials/materials.module';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { DetailProfileComponent } from './components/detail-profile/detail-profile.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TitlePipe } from './pipes/title.pipe';
import { ImgsrcDirective } from './directives/imgsrc.directive';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const myRoutes: Routes = [

  { path: 'course', component: ListCourseComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ListContactComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServicesComponent,
    ListContactComponent,
    NotFoundComponent,
    HomeComponent,
    AddressComponent,
    ContactFormComponent,
    LoginComponent,
    ListProfilesComponent,
    DetailProfileComponent,
    ReactiveComponent,
    TitlePipe,
    ImgsrcDirective,
    TemplateFormComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
