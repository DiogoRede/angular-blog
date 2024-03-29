import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photo:string ='';

  @Input()
  title:string = '';

  @Input()
  description:string ='';

  id:string | null = '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id=value.get('id'));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0];
    if(result){
      this.title = result.title;
      this.description = result.description;
      this.photo = result.photo;
    }
    
  }

}