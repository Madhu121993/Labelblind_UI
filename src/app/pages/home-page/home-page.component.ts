import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  file;
  fileName;
  fd;
  urlPort = 'http://localhost:3000';
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  //upload file
  uploadedFile(event) {
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name
    console.log('file and fileName is',this.file,this.fileName)
    if (this.file != undefined && this.file != '' && this.file != null) {
      this. fd = new FormData();
      this.fd.append('file', this.file, this.file['name']);
      this.http.post(this.urlPort + "/api/file/upload", this.fd)
      .catch((err) => {
        return Observable.throw(err)
      })
      .subscribe(uploadRes => {
        this.router.navigate(["/pages/result",{fileName:this.fileName}])
    });
    }
}
}
   

  



