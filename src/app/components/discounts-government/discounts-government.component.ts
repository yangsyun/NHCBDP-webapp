import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discounts-government',
  templateUrl: './discounts-government.component.html',
  styleUrls: ['./discounts-government.component.scss']
})
export class DiscountsGovernmentComponent implements OnInit {


  constructor( private router: Router, ) { }

  ngOnInit() {

  }


  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }

}
