import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../models/album.model';
import { computed } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-list.html',
  styleUrl: './album-list.css',
})
export class AlbumList {
  service = inject(AlbumsService);
  albums = computed<Album[]>(() => this.service._albums());

  


  deleteMe(id: number) {
    this.service.deleteAlbum(id);
  }
}