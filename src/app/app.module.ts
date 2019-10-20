import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';

import { FileUploadModule } from 'ng2-file-upload';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatCheckboxModule, 
  MatListModule, 
  MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { 
  MatTooltipModule 
} from '@angular/material';
import { CheckBoxComponent } from './check-box/check-box.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { DownloadComponent } from './download/download.component';





@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    CheckBoxComponent,
    CleaningComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    BrowserAnimationsModule,
    MatTooltipModule,MatCheckboxModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


