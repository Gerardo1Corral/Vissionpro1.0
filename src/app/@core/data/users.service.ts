import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Gasfiter', picture: 'assets/images/nick.png' },
    eva: { name: 'Miguel Bustamente', picture: 'assets/images/Avatar01.png' },
    jack: { name: 'Hector Parada', picture: 'assets/images/jack.png' },
    lee: { name: 'Eladio Lara', picture: 'assets/images/Avatar02.png' },
    alan: { name: 'Enrique Cid', picture: 'assets/images/alan.png' },
    kate: { name: 'Raúl Reyes', picture: 'assets/images/Avatar03.png' },
    gcorral: { name: 'Gerardo Corral', picture: 'assets/images/gcorral.png' },
    
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
