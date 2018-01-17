import { Component } from '@angular/core';
import { McrItem } from './models/mcritem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Air Panel Demo';

  public currentMcrItem: McrItem;

  constructor() {
    this.currentMcrItem = new McrItem();
    
    this.currentMcrItem.Name = "Item Default Name";
    this.currentMcrItem.Comment = "Item Default Comment";

  }
  
  public playItem(item:McrItem) : boolean
  {
    item.Name = `Clicked at ${new Date().getTime()}`;
    return false;
  }
}
