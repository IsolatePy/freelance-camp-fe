import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Document } from "./documents";
import { Observable } from "rxjs/Rx";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class DocumentService {
  private documentsUrl = "http://localhost:3001/freelance_documents.json";

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.documentsUrl).catch(this.handleError);
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
