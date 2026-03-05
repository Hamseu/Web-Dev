import { Component , inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album } from '../models/album.model';
import { signal } from '@angular/core';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-album-detail',
  imports: [RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {
     service = inject(AlbumsService);
     route = inject(ActivatedRoute);
     album = signal<Album>({
    id: 0,
    userId: 0,
    title: '',
    photos: [],
  });
     

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.album.set(this.service.getAlbumById(id));
    }
  }


  changeMe(updated: string, id: number){
        this.service.updateAlbum(updated, id);
        this.album.update(alu => ({ ...alu, title: updated }));
  }
}
