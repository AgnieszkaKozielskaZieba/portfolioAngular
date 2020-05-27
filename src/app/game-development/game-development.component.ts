import {
	ElementRef,
	QueryList,
	ViewChildren,
	Component,
	OnInit,
} from "@angular/core";

@Component({
	selector: "app-game-development",
	templateUrl: "./game-development.component.html",
	styleUrls: ["./game-development.component.scss"],
})
export class GameDevelopmentComponent implements OnInit {
	@ViewChildren("game") games: QueryList<ElementRef>;
	data = [
		{
			url:
				"https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2FHqNHB4guywcX0FgTRpI9TPXrxkQ2%2Fcontent%2Fc05b469f-31bc-354c-f602-46ba40d34976&imagePath=screens/4.png",
			img: "assets/imgs/Unity/Tilevania.png",
			title: "Tilevania",
			id: "Tilevania",
			hidden: true,
		},
		{
			url:
				"https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2FHqNHB4guywcX0FgTRpI9TPXrxkQ2%2Fcontent%2F644787fe-95d8-ece9-f054-83da14d547cd&imagePath=screens/0.png",
			img: "assets/imgs/Unity/GlitchGarden.png",
			title: "Glitch Garden",
			id: "GlitchGarden",
			hidden: true,
		},
		{
			url:
				"https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2FHqNHB4guywcX0FgTRpI9TPXrxkQ2%2Fcontent%2F980dcf05-b8a6-96d7-55f8-8e85c681102b&imagePath=screens/0.png",
			img: "assets/imgs/Unity/ZombieRunner.png",
			title: "Zombie Runner",
			id: "ZombieRunner",
			hidden: true,
		},
	];

	onHideModal(i) {
		this.games.forEach((el) => (el.nativeElement.src = ""));
		this.games.forEach(
			(el, i) => (el.nativeElement.src = this.data[i].url)
		);
		this.data[i].hidden = true;
	}
	constructor() {}

	ngOnInit() {}
}
