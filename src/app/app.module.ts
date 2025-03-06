import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactItemComponent } from './pages/contacts/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceCardComponent } from './pages/home/service-card/service-card.component';
<<<<<<< HEAD
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { EnquiryFormComponent } from './common/enquiry-form/enquiry-form.component';
=======
import { EnqiryFormComponent } from './pages/home/enqiry-form/enqiry-form.component';
import { FormsModule } from '@angular/forms';
>>>>>>> e2cd65ebdec06525441aab14e9745ae624783f42

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactsComponent,
    MenuBarComponent,
    ContactItemComponent,
    ServiceCardComponent,
<<<<<<< HEAD
    ProjectItemComponent,
    EnquiryFormComponent
=======
    EnqiryFormComponent
>>>>>>> e2cd65ebdec06525441aab14e9745ae624783f42
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule 
=======
    FormsModule
>>>>>>> e2cd65ebdec06525441aab14e9745ae624783f42
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
