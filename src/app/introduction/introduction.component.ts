import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../shared/navigation.service";

@Component({
	selector: "app-introduction",
	templateUrl: "./introduction.component.html",
	styleUrls: ["./introduction.component.scss"],
})
export class IntroductionComponent implements OnInit {
	constructor(private navigationService: NavigationService) {}

	ngOnInit() {}
	scrollTo(id: string) {
		this.navigationService.scrollTo(id);
	}
}
