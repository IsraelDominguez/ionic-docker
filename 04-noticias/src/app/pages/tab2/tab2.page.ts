import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from "@ionic/angular";
import {NoticiasService} from "../../services/noticias.service";
import {Article} from "../../interfaces/Article";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment, {static:true}) segment: IonSegment;

  categories = ['business', 'entertainment','general','health','science','sports','technology'];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.segment.value = this.categories[0];
    this.loadNews();
  }

  refreshNews(event) {
    this.noticias = [];
    this.segment.value = event.detail.value;
    this.loadNews()
  }

  loadNews(event?) {
    this.noticiasService.getTopHeadlinesByCategory(this.segment.value).subscribe(resp => {
      console.log('noticias', resp);
      if (resp.articles.length === 0 && event) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }

      this.noticias.push(...resp.articles);

      if (event) {
        event.target.complete();
      }
    });
  }
}
