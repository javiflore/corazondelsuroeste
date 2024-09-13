import { Component } from '@angular/core';

interface Album {
  title: string;
  releaseDate: string;
  imageUrl: string;
  spotifyUrl: string;
}

@Component({
  selector: 'app-discografia',
  templateUrl: './discografia.component.html',
  styleUrls: ['./discografia.component.css']
})
export class DiscografiaComponent {

  discographyData: Album[] = [
    {
      title: "Loving You",
      releaseDate: "30 de junio de 2023",
      imageUrl: "./assets/discografia/lovingYou.jpg",
      spotifyUrl: "https://open.spotify.com/intl-es/album/2IIRERnEi0cuxMND1a0UpF"
    },
    {
      title: "Turning Back Home",
      releaseDate: "28 de octubre de 2021",
      imageUrl: "./assets/discografia/turningBackHome.jpg",
      spotifyUrl: "https://open.spotify.com/intl-es/album/6au8RkxxK2n8w0GXauL4Sg"
    }
  ];

}
