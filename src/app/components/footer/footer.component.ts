import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Output() selectedPage = new EventEmitter<string>();

  avisosClicked(event: string){
    this.selectedPage.emit(event);
  }

}
