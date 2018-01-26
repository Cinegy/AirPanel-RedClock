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
    var frames = Math.round(d.getMilliseconds() / 40).toString().padStart(2,'0');
    
    this.CurrentTime = `${hour}:${mins}:${secs}:${frames}`;
    this.timer = setTimeout(() => this.updateTime(), 40);
  }

}
