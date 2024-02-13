import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  public userRemark: string  = '';

  constructor() { }

  getUserRemark() {
    return this.userRemark;
  }

  setUserRemark(remark: string) {
    this.userRemark = remark;
  }
}