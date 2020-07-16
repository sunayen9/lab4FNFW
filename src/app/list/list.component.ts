import { Component, OnInit } from '@angular/core';
import {custommers} from '../data/custommer';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  custommer=custommers;
  constructor() { }

  ngOnInit(): void {
  }
  countOrderByIdCus(id){
    return this.custommer.find(c=>c.id==id)['order'].length;
  }
  
}