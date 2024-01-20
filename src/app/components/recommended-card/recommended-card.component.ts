import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrls: ['./recommended-card.component.css']
})
export class RecommendedCardComponent implements OnInit {

  @Input()
  title:string = '';

  @Input()
  autor:string = '';

  @Input()
  link:string = '';

  @Input()
  img:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
