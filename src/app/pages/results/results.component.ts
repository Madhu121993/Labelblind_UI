import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: Http) { }
fileName;
data;
urlPort = 'http://localhost:3000';
  ngOnInit() {
    this.fileName = this.route.snapshot.paramMap.get('fileName');
    console.log("in results comp",this.fileName)
    var data={
      fileName: this.fileName
    }
    this.http.get(this.urlPort + "/api/users/getUserDetails?fileName="+this.fileName)
    .map(
      (response) => response.json()
    )
      .catch((err) => {
        return Observable.throw(err)
      })
      .subscribe(response => {
       console.log("response in result",response);
       this.data = response.usdValues;
    });
  }

}
