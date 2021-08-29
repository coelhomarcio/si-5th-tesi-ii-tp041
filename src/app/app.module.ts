import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule }            from "@angular/router";
import { MatToolbarModule }        from "@angular/material/toolbar";
import { MatListModule }           from "@angular/material/list";
import { MatButtonModule }         from "@angular/material/button";
import { MatIconModule }           from "@angular/material/icon";
import { MatFormFieldModule }      from "@angular/material/form-field";
import { MatInputModule }          from "@angular/material/input";
import {
  FormsModule,
  ReactiveFormsModule
}                                  from "@angular/forms";

import { AppComponent }     from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent }  from "./navbar/navbar.component";
import { HomeComponent }    from "./home/home.component";
import { AboutComponent }   from "./about/about.component";
import { NumbersComponent } from "./numbers/numbers.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NumbersComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
