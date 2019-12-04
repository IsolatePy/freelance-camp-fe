import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Proposal } from "./proposal";
import { Observable } from "rxjs/Rx";
import { ProposalService } from "./proposal.service";
import { toJSDate } from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar";

@Component({
  selector: "app-proposal",
  templateUrl: "./proposal.component.html",
  styleUrls: ["./proposal.component.css"],
  providers: [ProposalService]
})
export class ProposalComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;
  mode = "Observable";
  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
  }
  getProposals() {
    this.proposalService.getProposals().subscribe(
      proposals => (this.proposals = proposals),
      error => (this.errorMessage = <any>error)
    );
  }
  goToShow(proposal: Proposal): void {
    let link = ["/proposal", proposal.id];
    this.router.navigate(link);
  }
}
