import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corazondelsuroeste';

  selectedPage = 'inicio';

  
  viewClicked(event: string){
    this.selectedPage = event;
    this.scrollUp();
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

}
