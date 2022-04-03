import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  setItem(key: string, value: any) {
    if (localStorage.getItem(key)) {
      this.deleteToken(key);
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  deleteToken(key: string) {
    localStorage.removeItem(key);
  }

  setItemArray(key:string,value:any){
    console.log(value);
    
    if (localStorage.getItem(key)) {
      const tempData = this.getItem(key);
      tempData.push(...value)
      this.deleteToken(key);
      localStorage.setItem(key, JSON.stringify(tempData));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
