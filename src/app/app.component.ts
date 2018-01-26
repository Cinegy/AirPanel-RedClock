import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Air Panel Demo - Red Clock';
  
  private timer;
  public CurrentTime : string = "00:00:00:00";
  
  constructor() {
    this.updateTime();
  } 

  private updateTime() {
    var d = new Date();
    var hour = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var frames = this.pad2(Math.round(d.getMilliseconds() / 40));
    
    this.CurrentTime = `${hour}:${mins}:${secs}:${frames}`;
    this.timer = setTimeout(() => this.updateTime(), 40);
  }

  private pad2(num: number) : string
  {
      var s = "0" + num;
      if(s.length==2) return s;
      return s.substr(1,2);
  }

}
