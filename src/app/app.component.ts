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

  ngOnInit() {
    this.http.get('http://localhost:5000/Weatherforecast').subscribe(event => {
        console.log("happiness");
      });  
  }
  onUpload() {
    console.log("onUpload()");
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
      
  }
}

///Insert backend function in 'this.http.post('', fd, {' that accepts form data (ASP.NET CORE), for 'fd' also 'this.selectedFile' 
///possible if API endpoint accepts it and doesn't require formdata