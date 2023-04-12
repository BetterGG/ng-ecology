import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-tablePage",
  templateUrl: "./tablePage.component.html",
  styleUrls: ["./tablePage.component.scss"],
})
export class TablePageComponent implements OnInit {
  type = "dragSort";

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {}
}
