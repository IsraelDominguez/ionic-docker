import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/Article";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() noticias: Article[] = [];
  @Input() favs = true;

  constructor() { }

  ngOnInit() {}

}
