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
  numQtyModel = NaN;
  numList: number[] = [];
  error = false;

  constructor() { }

  public submit() {
    this.numQty = this.numQtyModel;
    this.numList = [];
    this.error = (this.numQty < 1 || this.numQty > 9 || isNaN(this.numQty));
    if (!this.error)
      while (this.numList.length < this.numQty) {
        let numTemp = (parseInt(String(Math.random() * 60 + 1)));
        if (!this.numList.includes(numTemp))
          this.numList.push(numTemp);
      }
    return this.numList;
  }

  ngOnInit(): void {
  }
}
