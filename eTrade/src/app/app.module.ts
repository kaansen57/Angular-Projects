import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CarouselModule } from 'primeng/carousel';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {BadgeModule} from 'primeng/badge';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    MenuComponent,
    HighlightsComponent,
    HomeComponent,
    DetailComponent,
    BasketComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    GalleriaModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    BadgeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
