import { Component, Input } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}

@Injectable()
export class HelloWooService {
  constructor(private httpClient: HttpClient) {}
  getPosts() {
    return this.httpClient.get("http://hp-api.herokuapp.com/api/characters/house/slytherin");
  }
}
