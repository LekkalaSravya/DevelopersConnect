import { Component, ElementRef, ViewChild ,PLATFORM_ID, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
// amount=0;
@ViewChild('paymentRef',{static:true}) paymentRef!:ElementRef;
constructor(private router:Router,@Inject(PLATFORM_ID) private platformId:Object){}
ngOnInit():void{
    // window.paypal.Buttons().render(this.paymentRef.nativeElement); 
}
}
