import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UploadFileService } from '../upload.service';

import { HttpResponse, HttpEventType } from '@angular/common/http';


const URL = 'https://localhost:4200';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
      
    });
 
    this.selectedFiles = undefined;
    
  }
  

}
