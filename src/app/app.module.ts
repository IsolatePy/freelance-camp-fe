import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { AppRoutingModule } from "./app-routing.module";
import { DocumentsComponent } from "./documents/documents.component";
import { DocumentService } from "./documents/document.service";
import { ProposalComponent } from "./proposal/proposal.component";
import { ProposalNewComponent } from "./proposal/proposal-new.component";
import { ProposalShowComponent } from "./proposal/proposal-show.component";
import { ProposalService } from "./proposal/proposal.service";

import {
  NgbPaginationModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule
  ],
  providers: [DocumentService, ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
