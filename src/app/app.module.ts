import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SortComponent } from './view/sort/sort.component';
// import { WelcomeComponent } from './view/welcome/welcome.component';
// import { FaceComponent } from './view/face/face.component';
// import { DatasetComponent } from './view/dataset/dataset.component';
// import { SuccessComponent } from './view/success/success.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButton, MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    // SortComponent,
    // WelcomeComponent,
    // FaceComponent,
    // DatasetComponent,
    // SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
