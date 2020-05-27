import { Injectable, ViewChild, ElementRef } from "@angular/core";
import { AboutComponent } from "../about/about.component";
@Injectable({
	providedIn: "root",
})
export class NavigationService {
	public scrollTo(id: String) {
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		let top =
			document.querySelector("#" + id).getBoundingClientRect().top +
			scrollTop -
			82;

		if (id === "introduction") top = 0;

		window.scroll({
			top: top,
			behavior: "smooth",
		});
	}

	constructor() {}
}
