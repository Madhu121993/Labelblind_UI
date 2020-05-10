import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: Http,private router: Router) { }
fileName;
data;
urlPort = 'http://localhost:3000';
  ngOnInit() {
    this.fileName = this.route.snapshot.paramMap.get('fileName');
    console.log("in results comp",this.fileName)
   if(this.fileName != null && this.fileName!= undefined && this.fileName != ''){
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
       localStorage.setItem("mailBody",JSON.stringify(this.data));
    });
   }
    
  }
  routerLink(){
    console.log("Hiiiiii")
    this.router.navigate(["/pages/email"])
  }

}
