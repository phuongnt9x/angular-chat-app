import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { UserComponent } from './user/user.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChatComponent } from './chat/chat.component';
import { GroupListComponent } from './group-list/group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChatComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
