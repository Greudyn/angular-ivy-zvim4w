import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable()
export class HelloWooService {
  apiUrl = "https://hp-api.herokuapp.com/api/characters/house/slytherin";
  constructor(private http: HttpClient) {}

  get_users() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
