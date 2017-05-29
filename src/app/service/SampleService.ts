
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Ip} from '../model/com/org/Ip';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SampleService {
  ip: string;

  constructor(private http: Http) {

  }

  makeAjaxCall() {
    this.getIpJson().then(iP => this.ip = iP.ip);
  }

  private getIpJson(): Promise<Ip> {
    const url = `http://ip.jsontest.com/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Ip)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
