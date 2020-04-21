import { Observable } from "rxjs";
import { PolandService } from "./../poland.service";
import { Poland } from "./../poland";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-poland",
  templateUrl: "./poland.component.html",
  styleUrls: ["./poland.component.css"]
})
export class PolandComponent implements OnInit {
  poland: Observable<Poland[]>;

  constructor(private polandService: PolandService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.poland = this.polandService.getPoland();
  }
}
