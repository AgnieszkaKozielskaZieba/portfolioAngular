import { Component, OnInit, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
	selector: "app-expanding-card",
	templateUrl: "./expanding-card.component.html",
	styleUrls: ["./expanding-card.component.scss"],
})
export class ExpandingCardComponent implements OnInit {
	@Input() cardTitle: string;
	short: boolean = true;
	constructor() {}

	ngOnInit() {}

	onToggle() {
		this.short = !this.short;
	}
}
