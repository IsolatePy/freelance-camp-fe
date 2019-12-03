import { Component, OnInit } from "@angular/core";
import { Document } from "./documents";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.css"]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "This is first document",
      file_url: "http://google.com",
      updated_at: "12/3/2019",
      image_url:
        "https://codersera.com/blog/wp-content/uploads/2019/06/mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "My Second Doc",
      description: "This is Second document",
      file_url: "http://google.com",
      updated_at: "12/3/2019",
      image_url:
        "https://www.persiantools.com/more/static/uploads/2018/01/freelancer-tools-1.jpg"
    },
    {
      title: "My last Doc",
      description: "This is last document",
      file_url: "http://google.com",
      updated_at: "12/3/2019",
      image_url: "https://miro.medium.com/max/3144/1*YSOU6PfUN45q3WChIglX4w.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
