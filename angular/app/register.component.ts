import globals = require('./globals');
import { Component }                       from '@angular/core';
import { Auth }                            from './auth.service';
import { AuthHttp }                        from 'angular2-jwt';
import { Http, Headers, RequestOptions }   from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';

@Component({
  selector: 'register',
  templateUrl: 'app/register.template.html'
})

export class RegisterComponent {
  registerResponse: string = '';

  constructor(private auth: Auth, private http: Http, private authHttp: AuthHttp) {}

  public parseUserData(user) {
    // Prepare POST body with profile info
    this.registerResponse = '';
    let body = JSON.parse(localStorage.getItem('profile'));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // Send POST request and log response
    this.authHttp.post(`${globals.API_URL}/register`, body, options)
      .map(res => res.json())
      .subscribe(
        data => this.registerResponse = 'Success!\n' + JSON.stringify(data, null, 2),
        error => console.log(error)
      );
  }
};
