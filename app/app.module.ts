import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CentrePlusProcheComponent } from './components/centre-plus-proche/centre-plus-proche.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { CentresComponent } from './components/centres/centres.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SearshComponent } from './components/searsh/searsh.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Centres', component: CentresComponent },
  { path: 'Services', component: ServiceComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Centre-plus-proche', component: CentrePlusProcheComponent },
  { path: 'Rendez-vous', component: ReservationComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    ServiceComponent,
    TeamComponent,
    FooterComponent,
    ReservationComponent,
    CentrePlusProcheComponent,
    ContactComponent,
    CardServiceComponent,
    CentresComponent,
    AccueilComponent,
    SearshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
