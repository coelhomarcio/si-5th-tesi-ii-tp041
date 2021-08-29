import { NgModule }             from "@angular/core";
import { CommonModule }         from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent }    from "./home/home.component";
import { AboutComponent }   from "./about/about.component";
import { NumbersComponent } from "./numbers/numbers.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "numbers", component: NumbersComponent }
];

@NgModule({
  declarations: [],
  imports:      [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:      [RouterModule]
})
export class AppRoutingModule {
}
