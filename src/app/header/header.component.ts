import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NavigationService } from "../shared/navigation.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	constructor(private navigationService: NavigationService) {}

	ngOnInit() {}

	scrollTo(id: string) {
		this.navigationService.scrollTo(id);
	}
}
