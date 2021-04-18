import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "./../../environments/environment";


@Injectable({
  providedIn: "root",
})
export class GlobalService {
  routeApi: string = environment.pathAPI;
  constructor(private http: HttpClient) {}

  geTimeUTC(hora: string, timeZone: number): any {
    let headers: any = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(
        `${ this.routeApi }time`,
        { hora, timeZone },
        { headers: headers }
      )
      .pipe(map((response) => response));
  }
}
