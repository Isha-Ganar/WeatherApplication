import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-car-crud',
  templateUrl: './car-crud.component.html',
  styleUrls: ['./car-crud.component.css'],
})
export class CarCrudComponent implements OnInit {
  car_payload: FormGroup;
 
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
    this.car_payload = new FormGroup({
      ID: new FormControl(null, Validators.required),
      Location: new FormControl('', Validators.required),
      AtmosphericPressure: new FormControl(null, Validators.required),
      Pressure: new FormControl(null, Validators.required),
      Humidity: new FormControl(null, Validators.required),
      Precipitation: new FormControl(null, Validators.required),
      SolarRadiation: new FormControl(null, Validators.required),
      Wind: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  add_user_car() {
    console.log('Weather add')
    const payload = this.car_payload.value;
    this.commonService.add_car(payload).subscribe((res) => {
      this.toastr.success('Weather is Successfully Added.');
    });
  }

  update_user_car() {
    console.log('Weather update')
    //const payload = this.car_payload.value;
    const payload = this.car_payload.get('Id')?.value;
    this.commonService.update_car(payload).subscribe((res) => {
      this.toastr.success('Weather is Successfully Updated.');
    });
  }

  delete_user_car() {
    console.log('Weather Delete')
    const payload = this.car_payload.get('Id')?.value;
    this.commonService.delete_car(payload).subscribe((res) => {
      this.toastr.success('Weather Successfully Removed.');
    });
  }

}
