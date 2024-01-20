import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-autor-title',
  templateUrl: './autor-title.component.html',
  styleUrls: ['./autor-title.component.css']
})
export class AutorTitleComponent implements OnInit {

  @Input() autor:string = '';
  @Input() time:string = '';
  @Input() color:string = 'color_default';

  constructor() { }

  ngOnInit(): void {
  }

}
