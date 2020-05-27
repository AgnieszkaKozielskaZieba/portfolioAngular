import { Component, OnInit, AfterViewChecked, ViewChild } from "@angular/core";
import { NgxMasonryComponent } from "ngx-masonry";
@Component({
	selector: "app-archicad-development",
	templateUrl: "./archicad-development.component.html",
	styleUrls: ["./archicad-development.component.scss"],
})
export class ArchicadDevelopmentComponent implements OnInit {
	@ViewChild(NgxMasonryComponent, { static: false })
	masonry: NgxMasonryComponent;

	constructor() {}

	ngOnInit() {}

	ngAfterViewChecked() {
		this.masonry.layout();
	}
}
