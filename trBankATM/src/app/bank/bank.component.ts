import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  city: string = '';
  county: string = '';
  options: HttpHeaders = new HttpHeaders({
    'content-Type': 'application/json',
    authorization: 'apikey 47pEvZTjPqPcv4KHH9WujK:6xyR2Ncb58x1jLN4P3x5f9',
  });
  urlPath: string = 'https://api.collectapi.com/corona/countriesData';

  data: any[] = [];
  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    await this.covid19();
    console.log(this.data);
  }

   covid19() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<any[]>(this.urlPath, { headers: this.options })
        .subscribe((data) => {
          this.data = data;

          Object.values(data).forEach((dt) => {
            this.data = dt;
          });
          resolve(true);
        });
    });
  }
}
