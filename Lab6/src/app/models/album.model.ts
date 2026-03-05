import { Photo } from "./photo.model";

export interface Album {
  id: number;
  userId: number;
  title: string;
  photos?: Photo[];  
}