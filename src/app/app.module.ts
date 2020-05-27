import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMasonryModule } from "ngx-masonry";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { AboutComponent } from "./about/about.component";
import { WebDevelopmentComponent } from "./web-development/web-development.component";
import { GameDevelopmentComponent } from "./game-development/game-development.component";
import { ArchicadDevelopmentComponent } from "./archicad-development/archicad-development.component";
import { ArchitectureComponent } from "./architecture/architecture.component";
import { CardComponent } from "./shared/card/card.component";
import { TitleComponent } from "./shared/title/title.component";
import { ExpandingCardComponent } from "./shared/expanding-card/expanding-card.component";
import { SafePipe } from "./shared/safe.pipe";
import { ModalWindowComponent } from "./shared/modal-window/modal-window.component";
import { GalleryComponent } from "./architecture/gallery/gallery.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutComponent,
    WebDevelopmentComponent,
    GameDevelopmentComponent,
    ArchicadDevelopmentComponent,
    ArchitectureComponent,
    CardComponent,
    TitleComponent,
    ExpandingCardComponent,
    SafePipe,
    ModalWindowComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMasonryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
