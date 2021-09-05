import { Component, OnInit } from "@angular/core";

import { AppComponent } from "../app.component";

@Component({
  selector:    "app-about",
  templateUrl: "./about.component.html",
  styleUrls:   [
    "./about.component.scss",
    "../app.component.scss"
  ]
})
export class AboutComponent implements OnInit {
  appComponent = new AppComponent();
  name = "Marcio Coelho";
  ra = "0050831921015";
  githubPage = "https://coelhomarcio.github.io";
  githubRepo = "https://github.com/coelhomarcio";

  constructor() { }

  ngOnInit(): void {
  }
}
