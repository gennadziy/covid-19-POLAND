import { Component, OnInit } from '@angular/core';
import { BelarusService } from "./../belarus.service";
import { Belarus} from "./../belarus";
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-belarus',
  templateUrl: './belarus.component.html',
  styleUrls: ['./belarus.component.css']
})
export class BelarusComponent implements OnInit {
    belarus: Observable<Belarus[]>;
  
    constructor(private belarusService: BelarusService,
      private router: Router) {}
  
    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.belarus = this.belarusService.getBelarus();
    }
  }
  