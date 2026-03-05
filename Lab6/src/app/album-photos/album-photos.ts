import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumsService} from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-photos',
  imports: [RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
     service = inject(AlbumsService);
     route = inject(ActivatedRoute);
     album = signal<Album>({
    id: 0,
    userId: 0,
    title: '',
    photos: [],
  });
     onImageError(event: Event) {
           (event.target as HTMLImageElement).src = "Defaultim.png";
}

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.album.set(this.service.getAlbumWithPhotosById(id));
    }
  }
}
