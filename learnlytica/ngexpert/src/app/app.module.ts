import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanelButtonComponent } from './panel-button/panel-button.component';
import { HelloDirective } from './hello.directive';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildItemComponent } from './child-item/child-item.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelButtonComponent,
    HelloDirective,
    ListComponent,
    IfComponent,
    SwitchComponent,
    ParentListComponent,
    ChildItemComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
