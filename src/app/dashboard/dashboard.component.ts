import { Component, OnInit } from '@angular/core';
import {custommers} from '../data/custommer';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  custommer=custommers;
  constructor() { }

  ngOnInit(): void {
  }
  countOrderByIdCus(id){
    return this.custommer.find(c=>c.id==id)['order'].length;
  }

}
