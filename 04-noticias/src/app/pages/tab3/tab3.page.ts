import {Component, OnInit} from '@angular/core';
import {NoticiasRepositoryService} from "../../services/noticias-repository.service";
import {Article} from "../../interfaces/Article";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  sliderOpts = {
    allowSlidePref: false,
    allowSlideNext: false
  };

  constructor(public noticiasRepository: NoticiasRepositoryService) {}

}
