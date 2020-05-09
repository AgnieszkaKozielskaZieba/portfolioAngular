import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	AfterViewInit,
} from "@angular/core";
import { ExpandingCardComponent } from "../shared/expanding-card.component";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
	@ViewChild("mainGrid") mainGrid: ElementRef;
	constructor() {}

	ngOnInit() {}

	ngAfterViewChecked() {
		$(".grid").masonry({
			itemSelector: ".grid-item",
			horizontalOrder: true,
		});
	}
}
