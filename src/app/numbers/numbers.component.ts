import { Component, OnInit } from "@angular/core";

import { AppComponent } from "../app.component";

@Component({
  selector:    "app-numbers",
  templateUrl: "./numbers.component.html",
  styleUrls:   [
    "./numbers.component.scss",
    "../app.component.scss"
  ]
})
export class NumbersComponent implements OnInit {
  appComponent = new AppComponent();
  numQty = NaN;
  numList: number[] = [];
  error = false;

  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    this.numList = [];
    if (this.numQty >= 1 && this.numQty <= 9)
      while (this.numList.length < this.numQty) {
        let numTemp = (parseInt(String(Math.random() * 100)));
        if (numTemp === 0)
          numTemp = 100;
        if (!this.numList.includes(numTemp))
          this.numList.push(numTemp);
      }
    this.error = (this.numQty < 1 || this.numQty > 9 || isNaN(this.numQty));
    return this.numList;
  }
}
