import {
	QueryList,
	ViewChildren,
	Input,
	Component,
	OnInit,
	HostListener,
} from "@angular/core";
export enum KEY_CODE {
	RIGHT_ARROW = 39,
	LEFT_ARROW = 37,
}

@Component({
	selector: "app-gallery",
	templateUrl: "./gallery.component.html",
	styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
	@Input() sources: string[] = [];
	prevImageInd;
	currentImageInd;
	nextImageInd;
	loadedImages = 0;
	galleryLoaded = false;

	@ViewChildren("image") images: QueryList<any>;

	@HostListener("window:resize")
	onResize() {
		this.resizeImages();
	}

	@HostListener("window:keyup", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
			this.onNextImage();
		}

		if (event.keyCode === KEY_CODE.LEFT_ARROW) {
			this.onPrevImage();
		}
	}

	constructor() {}

	ngOnInit() {
		this.prevImageInd = this.sources.length - 1;
		this.currentImageInd = 0;
		this.nextImageInd = Math.min(1, this.sources.length - 1);
	}
	ngAfterViewInit() {
		this.removeClasses();
		this.addClasses();
	}

	onImageLoaded() {
		this.loadedImages++;
		if (this.loadedImages === this.sources.length) {
			this.galleryLoaded = true;
			this.resizeImages();
			this.images.forEach((el) => {
				el.nativeElement.classList.remove("hidden");
			});
		}
	}

	removeClasses() {
		this.images.forEach((el) => {
			el.nativeElement.classList.remove("prev", "current", "next");
		});
	}

	addClasses() {
		this.images
			.toArray()
			[this.prevImageInd].nativeElement.classList.add("prev");
		this.images
			.toArray()
			[this.currentImageInd].nativeElement.classList.add("current");
		this.images
			.toArray()
			[this.nextImageInd].nativeElement.classList.add("next");
	}

	resizeImages() {
		let imgArray = this.images.toArray();
		if (this.images.length > 0) {
			let screenRatio = 1.5;
			let horRatio =
				imgArray[0].nativeElement.naturalWidth /
				imgArray[0].nativeElement.naturalHeight;
			let vertRatio =
				imgArray[0].nativeElement.naturalWidth /
				imgArray[0].nativeElement.naturalHeight;
			for (let i = 0; i < imgArray.length; i++) {
				let tempRatio =
					imgArray[i].nativeElement.naturalWidth /
					imgArray[i].nativeElement.naturalHeight;
				console.log(imgArray[i].nativeElement.src);
				console.log(tempRatio);
				if (tempRatio > screenRatio) {
					if (tempRatio > horRatio) {
						horRatio = tempRatio;
						// console.log(horRatio);
					}
				} else {
					if (tempRatio > vertRatio) {
						vertRatio = tempRatio;
						// console.log(vertRatio);
					}
				}
			}

			this.images.forEach((el) => {
				let tempRatio =
					el.nativeElement.naturalWidth /
					el.nativeElement.naturalHeight;
				if (tempRatio > screenRatio) {
					el.nativeElement.height = Math.min(
						window.innerHeight,
						window.innerWidth / horRatio
					);
					el.nativeElement.width =
						el.nativeElement.height * tempRatio;
				} else {
					el.nativeElement.height = Math.min(
						window.innerHeight,
						window.innerWidth / vertRatio
					);
					el.nativeElement.width =
						el.nativeElement.height * tempRatio;
				}
			});
		}
	}

	onNextImage() {
		this.prevImageInd = this.currentImageInd;
		this.currentImageInd = this.nextImageInd;

		if (this.currentImageInd < this.sources.length - 1) {
			this.nextImageInd = this.currentImageInd + 1;
		} else {
			this.nextImageInd = 0;
		}
		this.removeClasses();
		this.addClasses();
	}
	onPrevImage() {
		this.nextImageInd = this.currentImageInd;
		this.currentImageInd = this.prevImageInd;

		if (this.currentImageInd > 0) {
			this.prevImageInd = this.currentImageInd - 1;
		} else {
			this.prevImageInd = this.sources.length - 1;
		}
		this.removeClasses();
		this.addClasses();
	}
}
