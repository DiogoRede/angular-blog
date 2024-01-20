import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit{

  @Input() title:string = '';
  @Input() icon:string = '';
  @Input() link:string = '#';
  target:string = '_parent';

  constructor() { }

  ngOnInit(): void {
    this.target = this.link!=='#' ? '_blank' : '_parent';
  }

}