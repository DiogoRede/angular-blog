import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id:string="0";

  @Input()
  img:string = '';

  @Input()
  title:string = '';

  @Input()
  autor:string = '';

  @Input()
  time:string = '';

  @Input()
  categories:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
