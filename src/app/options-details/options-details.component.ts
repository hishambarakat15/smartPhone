import {Component, Input, OnInit} from '@angular/core';
import {op} from "../models/options";

@Component({
  selector: 'app-options-details',
  templateUrl: './options-details.component.html',
  styleUrls: ['./options-details.component.css']
})
export class OptionsDetailsComponent implements OnInit {
@Input() options:op = null;
  constructor() { }

  ngOnInit() {
  }

}
