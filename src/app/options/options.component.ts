import { Component, OnInit } from '@angular/core';
import {op} from "../models/options";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
private options: op [] = [];
  constructor() {
    this.options.push(new op("fa fa-users fa-3x","Free Shpping","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"));
    this.options.push(new op("fa fa-headphones fa-3x","Customer Support","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"));
    this.options.push(new op("fa fa-plane fa-3x","15 days money back","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"));

  console.log(this.options);
  }

  ngOnInit() {
  }

}
