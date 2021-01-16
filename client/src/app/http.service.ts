import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  test = "How r u?";
  constructor(private http: HttpClient) {}


  sendEmail(url:any, data:any) {
    return this.http.post(url, data);
  }
}
