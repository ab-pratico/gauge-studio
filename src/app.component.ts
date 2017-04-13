import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'App',
  template:
  `<div>
    <h2>Welcome to {{name}} Angular2!</h2>
    <hr /><span>{{now()}}</span>  
  </div>`
})
export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';

  constructor(private chr: ChangeDetectorRef) {

  }
  now(): Date {
    return new Date();
  }

  ngOnInit(): void {
    console.log('component initialized');

    setInterval(() => {
      this.chr.detectChanges();
    }, 1000);
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }