import { Routes } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about'
import { AlbumList } from './album-list/album-list';
import { AlbumDetail } from './album-detail/album-detail';
import { AlbumPhotos } from './album-photos/album-photos';

export const routes: Routes = [
    {   path: '', 
        component:Home,
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: Home,

    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'albums',
        component: AlbumList,  
    },
    {
        path: 'albums/:id',
        component: AlbumDetail,
    },
    {
        path: 'albums/:id/photos',
        component: AlbumPhotos
    },

];
