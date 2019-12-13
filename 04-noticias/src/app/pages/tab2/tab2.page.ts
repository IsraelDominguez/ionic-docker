import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from "@ionic/angular";
import {NoticiasService} from "../../services/noticias.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment, {static:true}) segment: IonSegment;

  categories = ['business', 'entertainment','general','health','science','sports','technology'];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.segment.value = this.categories[0];
    this.noticiasService.getTopHeadlinesByCategory(this.categories[0]).subscribe(resp => {
      console.log(resp.articles);
    });
  }
}
