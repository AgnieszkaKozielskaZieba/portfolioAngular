import { Component, OnInit, AfterViewChecked, ViewChild } from "@angular/core";
import { NgxMasonryComponent } from "ngx-masonry";
@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
	@ViewChild(NgxMasonryComponent, { static: false })
	masonry: NgxMasonryComponent;

	constructor() {}

	ngOnInit() {}

	ngAfterViewChecked() {
		this.masonry.layout();
	}
}
