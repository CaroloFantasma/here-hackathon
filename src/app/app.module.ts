import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';


import { environment } from '../environments/environment';
import { FirebaseService } from "./firebase.service";

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { SplashComponent } from './splash/splash.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListPlacesComponent } from './list-places/list-places.component';
import { Header2Component } from './header2/header2.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

const appRoutes: Routes = [
  {
    path: 'add',
    component: FormComponent,

  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'conditions',
    component: ConditionsComponent,
  },
  {
    path: '',
    component: SplashComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FormComponent,
    HeaderComponent,
    ModalDetailsComponent,
    InputSearchComponent,
    SplashComponent,
    CategoriesComponent,
    ListPlacesComponent,
    Header2Component,
    PlaceDetailsComponent,
    ConditionsComponent,
    AboutUsComponent,
    BottomSheetComponent,
  ],
  entryComponents: [
    BottomSheetComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
