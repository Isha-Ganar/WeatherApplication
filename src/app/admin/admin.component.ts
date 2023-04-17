import { Component, OnInit } from '@angular/core';
import { carwashdetails } from '../carwashdetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  Car_Details  : carwashdetails []=[];

  constructor() { }



  ngOnInit(): void {


}
  title = 'Admin';
  formGroup="formValue";

}
/**
 * this.Car_Details=[

     { UserId: 1,

      UserName : "samar" ,

      UserCar : "BR28K0341",

      UserAddress : "gopalganj"

    },

     { UserId: 2,

      UserName : "dev" ,

      UserCar : "BR28L0001",

      UserAddress : "gopalganj"

    },

    { UserId: 3,

      UserName : "harsh" ,

      UserCar : "BR28L1527",

      UserAddress : "gopalganj"

    },
    { UserId: 4,

      UserName : "saurabh" ,

      UserCar : "BR28V14520",

      UserAddress : "gopalganj"

    },
    { UserId: 5,

      UserName : "soham" ,

      UserCar : "BR01F8976",

      UserAddress : "gopalganj"

    },
    { UserId: 6,

      UserName : "setu" ,

      UserCar : "BR28L8998",

      UserAddress : "gopalganj"

    },

]
 */