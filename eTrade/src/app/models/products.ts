export interface Products {
  Products?: Product[];
}

export interface Product {
  durum: boolean;
  mesaj: string;
  total: string;
  bilgiler: Bilgiler[];
}
export interface Bilgiler {
  productId?: string;
  productName?: string;
  brief?: string;
  description?: string;
  price?: string;
  totalPrice?: number;
  saleInformation?: SaleInformation;
  campaign?: Campaign;
  campaignTitle?: string;
  campaignDescription?: string;
  categories?: Category[];
  image?: boolean;
  images?: Image[];
  likes?: Likes;
}

export interface Campaign {
  campaignTypeId: string;
  campaignType?: string;
}

export interface Category {
  categoryId: string;
  categoryName: string;
}

export interface Image {
  normal: string;
  thumb: string;
}

export interface Likes {
  like: Like;
  dislike: number;
}

export interface Like {
  oy_toplam: string;
  ortalama: string;
}

export interface SaleInformation {
  saleTypeId: string;
  saleType: SaleType;
}

export enum SaleType {
  Satılık = 'Satılık',
}
