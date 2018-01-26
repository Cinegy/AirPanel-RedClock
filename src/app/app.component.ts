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
    
    this.currentMcrItem.Name = "Item Name";
    this.currentMcrItem.Comment = "Item Default Comment";

    if(this.currentMcrItem.Name == "jjj")
    {
      this.SelectedItemUpdated();
    }

  }

  

  public SelectedItemUpdated() : void
  {
    this.currentMcrItem.Name = "Fired!";
  }
  
  public playItem(item:McrItem) : boolean
  {
    var wang = window.external["Numberwang"];
    item.Name = `C# apps say numberwang is: ${wang}`;
    
    return false;
  }

  public clearItem(item:McrItem) : boolean
  {
    window.external["Test"]("Current item name: " + item.Name);
    
    return false;
  }
}
