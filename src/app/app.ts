import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('demo-library1');

  isTrue = signal(true)

  toggleValue(){
    this.isTrue.update(v => !v)
  }

  showIntro = signal(true)
  fading = signal(false)

  ngOnInit() : void{
    setTimeout(() => {this.fading.set(true)},5000)
    setTimeout(() => {this.showIntro.set(false)},5700)

  }

  skipIntro(){
    this.fading.set(true)
    setTimeout(()=> {this.showIntro.set(false)},700)
  }
}
