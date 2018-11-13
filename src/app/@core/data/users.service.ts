
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'pandu', picture: 'assets/images/nick.png' },
    eva: { name: 'Shilpa', picture: 'assets/images/eva.png' },
    jack: { name: 'Abhijith', picture: 'assets/images/jack.png' },
    lee: { name: 'Sridhar', picture: 'assets/images/lee.png' },
    alan: { name: 'Suhasa', picture: 'assets/images/alan.png' },
    kate: { name: 'Pandurangareddy', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
