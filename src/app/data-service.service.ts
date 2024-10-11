import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data: any;
  constructor() { }

  setdata(data:any) {
    this.data=data
  }
  getdata() {
    return this.data
  }
}


