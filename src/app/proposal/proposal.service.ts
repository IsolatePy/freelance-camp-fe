import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Proposal } from "./proposal";
import { Observable } from "rxjs/Rx";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class ProposalService {
  private proposalsUrl = "http://localhost:3002/proposals";
  constructor(private http: HttpClient) {}
  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(this.proposalsUrl).catch(this.handleError);
  }
  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id + ".json");
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
