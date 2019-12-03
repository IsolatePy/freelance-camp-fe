import { Component, OnInit } from "@angular/core";
import { Proposal } from "./proposal";

@Component({
  selector: "app-proposal",
  templateUrl: "./proposal.component.html",
  styleUrls: ["./proposal.component.css"]
})
export class ProposalComponent implements OnInit {
  proposalOne: Proposal = new Proposal(
    15,
    "ABC company",
    "http://portfolio.jordanhudgens.com",
    "Ruby on Rails",
    150,
    120,
    15,
    "jordan@devcamp.com"
  );
  proposalTwo: Proposal = new Proposal(
    99,
    "XYZ company",
    "http://portfolio.jordanhudgens.com",
    "Ruby on Rails",
    150,
    120,
    15,
    "jordan@devcamp.com"
  );
  proposalThree: Proposal = new Proposal(
    300,
    "Something company",
    "http://portfolio.jordanhudgens.com",
    "Ruby on Rails",
    150,
    120,
    15,
    "jordan@devcamp.com"
  );

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];
  constructor() {}

  ngOnInit() {}
}
