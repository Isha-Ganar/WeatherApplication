import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { WeatherModel } from 'src/app/weather-model';
@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css'],
})
export class CarsViewComponent implements OnInit {
  //user_list:any = [];
  user_list : WeatherModel[] = [];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.get_all_user_cars();
  }

  get_all_user_cars() {
    this.commonService.get_all_user_cars().subscribe(res => {
      this.user_list = JSON.parse(res);
    });
  }
}
