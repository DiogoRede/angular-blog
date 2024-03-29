import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css', './new-card.responsive.component.css']
})
export class NewCardComponent implements OnInit {

  @Input() autor:string = '';
  @Input() time:string = '';
  @Input() noticia:string = '';
  @Input() id:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
