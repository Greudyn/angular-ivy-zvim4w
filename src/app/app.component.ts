import { Component, OnInit } from "@angular/core";
import { User } from "./user.model";
import { HelloWooService } from "./hello-woo.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  users$: User[];
  constructor(private helloWooService: HelloWooService) {}
  ngOnInit() {
    return this.helloWooService
      .get_users()
      .subscribe(data => (this.users$ = data));
  }
}
