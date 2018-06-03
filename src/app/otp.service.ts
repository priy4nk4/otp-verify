import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class OtpService {
  AUTH_KEY = '204185Ay2H7ot3vj5aaea2b2'
  SEND_OTP_ENDPOINT = 'http://control.msg91.com/api/sendotp.php'
  VERIFY_OTP_ENDPOINT = 'https://control.msg91.com/api/verifyRequestOTP.php'  
  SENDER = 'TESTSMS'
  GET_OTP_MESSAGE = "Hi, your OTP verification code is %23%23OTP%23%23"
  
  
  constructor(private http:HttpClient) { }
  getOTP(phone){    
    return this.http.get(this.SEND_OTP_ENDPOINT+'?authkey='+this.AUTH_KEY+'&sender='+this.SENDER+'&                               message='+this.GET_OTP_MESSAGE+'&mobile='+phone)

  }

  checkotp(phonenum, otppin){
    console.log("service",phonenum,otppin);
    return this.http.get(this.VERIFY_OTP_ENDPOINT+'?authkey='+this.AUTH_KEY+'&mobile='+phonenum+'&otp='+otppin)
  }


}
