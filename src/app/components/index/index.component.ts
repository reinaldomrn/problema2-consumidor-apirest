import { Component, Inject, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';




@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  hora: string = '18:31:45';
  timeZone: string = '-3';
  result: any = '';

  constructor(private _globaService: GlobalService) {}

  ngOnInit() {}

  getTimeZone() {
    this._globaService
      .geTimeUTC(this.hora, parseInt(this.timeZone))
      .subscribe((response) => {
        this.result = JSON.stringify(response, null, 4);
        window.open(`${this._globaService.routeApi}time`, "_blank");
      });
  }
}
