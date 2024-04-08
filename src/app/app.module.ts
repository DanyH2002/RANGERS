import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

//USUARIOS
import { LoginComponent } from './users/login/login.component';
import { RegistroComponent } from './users/registro/registro.component';

//VISTAS
import { PeliculasComponent } from './vistas/pelicula/peliculas/peliculas.component';
import { PersonajesComponent } from './vistas/pelicula/personajes/personajes.component';
import { VillanosComponent } from './vistas/pelicula/villanos/villanos.component';

import { ArmasComponent } from './vistas/serie/armas/armas.component';
import { CrossoverComponent } from './vistas/serie/crossover/crossover.component';
import { EquipoComponent } from './vistas/serie/equipo/equipo.component';
import { MentorComponent } from './vistas/serie/mentor/mentor.component';
import { MorferComponent } from './vistas/serie/morfer/morfer.component';
import { MounstroComponent } from './vistas/serie/mounstro/mounstro.component';
import { PersecComponent } from './vistas/serie/persec/persec.component';
import { RangersComponent } from './vistas/serie/rangers/rangers.component';
import { TemporadaComponent } from './vistas/serie/temporada/temporada.component';
import { TransporteComponent } from './vistas/serie/transporte/transporte.component';
import { VillanComponent } from './vistas/serie/villan/villan.component';
import { ZordComponent } from './vistas/serie/zord/zord.component';

//FORMULARIOS
import { PeliculaComponent } from './form/pelicula/pelicula/pelicula.component';
import { VillainComponent } from './form/pelicula/villain/villain.component';
import { CharacterComponent } from './form/pelicula/character/character.component';

import { ArmaComponent } from './form/serie/arma/arma.component';
import { CrossoversComponent } from './form/serie/crossovers/crossovers.component';
import { MentorsComponent } from './form/serie/mentors/mentors.component';
import { MonsterComponent } from './form/serie/monster/monster.component';
import { MorfersComponent } from './form/serie/morfers/morfers.component';
import { RangerComponent } from './form/serie/ranger/ranger.component';
import { SeasonComponent } from './form/serie/season/season.component';
import { SecperComponent } from './form/serie/secper/secper.component';
import { TeamComponent } from './form/serie/team/team.component';
import { TransportComponent } from './form/serie/transport/transport.component';
import { VillanoComponent } from './form/serie/villano/villano.component';
import { ZordsComponent } from './form/serie/zords/zords.component';

import { LandingComponent } from './partial/landing/landing.component';
import { HeaderComponent } from './partial/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
