import { Component, OnInit, ViewChild } from '@angular/core';

import { OtpService } from '../otp.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('phone') phone;
  constructor(private otp: OtpService) { }

  ngOnInit() {

  }

  addPhone(phone): void{
    this.otp.getOTP(this.phone).subscribe(
      data=>{
        console.log(data)
      })
  }

}
