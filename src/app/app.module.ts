import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { RecommendedCardComponent } from './components/recommended-card/recommended-card.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchArticleComponent } from './components/search-article/search-article.component';
import { AutorTitleComponent } from './components/autor-title/autor-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    MenuTitleComponent,
    RecommendedCardComponent,
    NewCardComponent,
    HomeComponent,
    MenuItemComponent,
    SearchArticleComponent,
    AutorTitleComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
