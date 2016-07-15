import globals = require('./globals');
import { Component } from '@angular/core';
import { Auth }      from './auth.service';
import { AuthHttp }  from 'angular2-jwt';
import { Http }      from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ping',
  templateUrl: 'app/ping.template.html'
})

export class PingComponent {
  message: string;

  constructor(private auth: Auth, private http: Http, private authHttp: AuthHttp) {}

  public ping() {
    this.message = '';
    this.http.get(`${globals.API_URL}/public/ping`)
      .map(res => res.json())
      .subscribe(
        data => this.message = data.text,
        error => this.message = error
      );
  }

  public securedPing() {
    this.message = '';
    this.authHttp.get(`${globals.API_URL}/ping`)
      .map(res => res.json())
      .subscribe(
        data => this.message = data.text,
        error => this.message = error._body || error
      );
  }
};
