import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Proposal } from "./proposal";

@Component({
  selector: "proposal-show",
  templateUrl: "proposal-show.component.html",
  styleUrls: ["proposal-show.component.css"]
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routeID: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeID = this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
  }
}
