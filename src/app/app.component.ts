import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];    
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('', fd, {
      reportProgress: true,
      observe: 'events'
    })     
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%')
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }        
      });    
  }
}

///Insert backend function in 'this.http.post('', fd, {' that accepts form data (ASP.NET CORE), for 'fd' also 'this.selectedFile' 
///possible if API endpoint accepts it and doesn't require formdata