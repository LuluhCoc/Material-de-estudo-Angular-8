import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import {MatCardModule} from "@angular/material/card"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button";
import { ClientsComponent } from './clients/clients.component'
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { ItemClientComponent } from './client/item-client/item-client.component';
import { TimerComponent } from './parent-child/timer/timer.component';
import { ParentChildComponent } from './parent-child/parent-child.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NamesChangesComponent } from './on-changes/names-changes/names-changes.component';
import { InterceptingComponent } from './intercepting/intercepting.component';
import { NameComponent } from './intercepting/name/name.component'
@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent,
    TimerComponent,
    ParentChildComponent,
    OnChangesComponent,
    NamesChangesComponent,
    InterceptingComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
