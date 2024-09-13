import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  videos = [
    {
      title: "Primer Concierto",
      description: "Nuestro primer concierto en vivo",
      url: "https://www.youtube.com/embed/watch?v=KPpgNPvK9_E"
    },
    {
      title: "Primer Concierto",
      description: "Nuestro primer concierto en vivo",
      url: "https://www.youtube.com/embed/watch?v=ZlhXcK517B0"
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Sanitize the URLs before using them in the template
    this.videos.forEach(video => video.url = this.sanitizer.bypassSecurityTrustResourceUrl(video.url) as string);
  }

}
