import { Component, OnInit, ViewChild } from '@angular/core';

import { OtpService } from '../otp.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('phone') phone;
  @ViewChild('otp') otppin;
  constructor(private otp: OtpService) { }

  ngOnInit() {

  }

  addPhone(phone): void{
    this.otp.getOTP(phone).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem("phone", phone)
      })
  }

  verify(otppin): void{
    var phonenum= localStorage.getItem("phone")
    console.log(phonenum, otppin)
    this.otp.checkotp(phonenum, otppin).subscribe(
      data => {
        console.log(data)
      })
  }

}
