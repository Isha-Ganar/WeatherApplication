import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarsViewComponent } from '../shared/cars-view/cars-view.component';
import { CarCrudComponent } from '../shared/car-crud/car-crud.component';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild(CarsViewComponent, { static: false })
  view_car_comp!: CarsViewComponent;
  @ViewChild(CarCrudComponent, { static: false })
  car_crud_comp!: CarCrudComponent;

  userlists: any;
  show_all_users = false;
  constructor(private http: HttpClient, private serv : CommonService) {}
  ngOnInit(): void {
    // let response=this.http.get("http://localhost:8084/api/v1/getall");
    // response.subscribe((data)=>this.userlists=data)
  }

  add_user_car() {
    this.car_crud_comp.add_user_car();
  }

  update_user_car() {
    this.car_crud_comp.update_user_car();
  }

  delete_user_car() {
    this.car_crud_comp.delete_user_car();
  }

  get_all_user_car() {
     this.show_all_users = true;
     this.view_car_comp.get_all_user_cars();
     //this.serv.get_all_user_cars();
  }
}
