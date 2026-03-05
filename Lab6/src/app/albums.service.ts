import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Album } from './models/album.model';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private http = inject(HttpClient);
  private littleURL = 'https://jsonplaceholder.typicode.com';

    loading = signal(true);
  _albums = signal<Album[]>([]);

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.littleURL}/albums`);
  }

  getAlbumById(id: number): Album  {
  return this._albums().find(album => album.id === id) || 
    { id: -1, userId: -1, title: 'Unknown Album', photos: [] };
}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.littleURL}/photos`);
  }

  getAlbumPhotosById(albumId: number): Photo[] {
  const album = this._albums().find(a => a.id === albumId);
  return album?.photos ?? [];
}

  getAlbumWithPhotosById(id: number): Album {
  return (
    this._albums().find(album => album.id === id) || 
    { id: -1, userId: -1, title: 'Unknown Album', photos: [] }
  );
}


  getAlbumsWithPhotos(): void {
    this.loading.set(true);
    this.getAlbums()
      .pipe(
        switchMap(albums =>
          this.getPhotos().pipe(
            map(photos =>
              albums.map(album => ({
                ...album,
                photos: photos.filter(p => p.albumId === album.id),
              }))
            )
          )
        ),
        tap(albumsWithPhotos => this._albums.set(albumsWithPhotos))
      )
      .subscribe({complete: () =>{
        setTimeout(() => {
          this.loading.set(false);
        }, 2000);
      }, 
      error: () => {
        setTimeout(() => {
          this.loading.set(false);
        }, 3000); 
      },
    });
  }

  deleteAlbum(id: number): void {
    this._albums.update(albums =>
      albums.filter(album => album.id !== id)
    );
  }

  updateAlbum(updated: string, id: number): void {
  this._albums.update(albums =>
    albums.map(album =>
      album.id === id
        ? { ...album, title: updated } 
        : album 
    )
  );
}

     deletePhotoFromAlbum(photoId: number, albumId: number): void {
  this._albums.update(albums =>
    albums.map(album =>
      album.id === albumId
        ? { ...album, photos: album.photos?.filter(photo => photo.id != photoId) ?? [] } : album
    )
  );
}

  constructor(){
      this.getAlbumsWithPhotos();
  }
}