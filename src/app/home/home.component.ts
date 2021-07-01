import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly API_URL = 'http://localhost:3002';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

signIn() {
    this.http.get(this.API_URL + '/token/sign')
      .subscribe(
        (res) => {
          //console.log(res);
          if (res) {
            console.log(res);
            let token = res["token"];
            console.log(token);
            localStorage.setItem('token',token); //token here is stored in a local storage
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getPath() {
    this.http.get(this.API_URL + '/path1') //path1 is then requested
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
