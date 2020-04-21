import { Observable } from "rxjs";
import { Poland1Service } from "./../poland1.service";
import { Poland1 } from "./../poland1";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-poland",
  templateUrl: "./poland1.component.html",
  styleUrls: ["./poland1.component.css"]
})
export class Poland1Component implements OnInit {
  poland1: Observable<Poland1[]>;

  constructor(private poland1Service: Poland1Service,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.poland1 = this.poland1Service.getPoland1();
  }
}
