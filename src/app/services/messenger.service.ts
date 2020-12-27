import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(product: any) {
    this.subject.next(product);
  }

  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }
}