import { GalleryInterface } from 'interfaces/gallery';
import { GetQueryInterface } from 'interfaces';

export interface ArtworkInterface {
  id?: string;
  name: string;
  price: number;
  gallery_id?: string;
  created_at?: any;
  updated_at?: any;

  gallery?: GalleryInterface;
  _count?: {};
}

export interface ArtworkGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  gallery_id?: string;
}
