import {
	HostListener,
	Component,
	OnInit,
	Output,
	EventEmitter,
} from "@angular/core";

@Component({
	selector: "app-modal-window",
	templateUrl: "./modal-window.component.html",
	styleUrls: ["./modal-window.component.scss"],
})
export class ModalWindowComponent implements OnInit {
	@Output() hide = new EventEmitter<boolean>();
	@HostListener("document:keydown.escape", ["$event"]) onKeydownHandler(
		event: KeyboardEvent
	) {
		this.hideModal();
	}
	constructor() {}

	ngOnInit() {}

	hideModal() {
		this.hide.emit(true);
	}
}
