import { Component } from '@angular/core';
import { McrItem } from './models/mcritem';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Air Panel Demo';

  public currentMcrItem: McrItem;

  constructor(){ //httpClient: HttpClient) {
    this.currentMcrItem = new McrItem();
    
    this.currentMcrItem.Name = "Mike Is A Wibbler";
    this.currentMcrItem.Comment = "Oh, yes - he really is";

    //httpClient.get('./assets/config/mcritem-dummy1.json')
    //  .subscribe(
    //    response => { this.currentMcrItem = response as McrItem; }
    //  )
  }
}
