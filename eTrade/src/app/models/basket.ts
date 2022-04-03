export interface Basket{
    order:BasketDetail[];
}
export interface BasketDetail{
    durum:boolean;
    mesaj:string;
}