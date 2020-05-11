import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-web-development",
	templateUrl: "./web-development.component.html",
	styleUrls: ["./web-development.component.scss"],
})
export class WebDevelopmentComponent implements OnInit {
	data = [
		{
			url: "../tictactoe",
			img: "assets/imgs/WebDev/tictactoe.jpg",
			title: "Tic Tac Toe Game",
			technologies: "React",
		},
		{
			url: "../movies-viewer",
			img: "assets/imgs/WebDev/movies-viewer.jpg",
			title: "Movies browser",
			technologies: "React",
		},
		{
			url: "../wikipedia-viewer",
			img: "assets/imgs/WebDev/wikipedia-viewer.jpg",
			title: "Wikipedia viewer",
			technologies: "React",
		},
		{
			url: "../weather-app",
			img: "assets/imgs/WebDev/weather-app.jpg",
			title: "Weather App",
			technologies: "React",
		},
		{
			url: "../Miniarchitektura/home.html",
			img: "assets/imgs/WebDev/Miniarchitektura.png",
			title: "Miniarchitektura",
			technologies: "HTML + CSS + Bootstrap",
		},
		{
			url: "../WilczysteGardlo/index.html",
			img: "assets/imgs/WebDev/Wilczyste.png",
			title: "Wilczyste Gardło",
			technologies: "HTML + CSS",
		},
		{
			url: "index.html",
			img: "assets/imgs/WebDev/Portfolio.png",
			title: "Portfolio",
			technologies: "HTML + CSS + JavaScript + Bootstrap",
		},
		{
			url: "../CharacterFrequencies",
			img: "assets/imgs/WebDev/CharacterFrequencies.jpg",
			title: "Letter Analyzer",
			technologies: "JavaScript + D3",
		},
		{
			url: "../ColorGame",
			img: "assets/imgs/WebDev/ColorGame.jpg",
			title: "Color Game",
			technologies: "HTML + CSS + JavaScript",
		},
		{
			url: "../DataDashboard",
			img: "assets/imgs/WebDev/DataDashboard.jpg",
			title: "CO2 Emissions Data Dashboard",
			technologies: "HTML + CSS + JavaScript + D3",
		},
		{
			url: "../NotesApp",
			img: "assets/imgs/WebDev/NotesApp.jpg",
			title: "Notes App",
			technologies: "JavaScript",
		},
		{
			url: "../RandomUser",
			img: "assets/imgs/WebDev/RandomUser.jpg",
			title: "Random User Generator",
			technologies: "JavaScript",
		},
		{
			url: "../RonSwanson",
			img: "assets/imgs/WebDev/RonSwanson.jpg",
			title: "Ron Swanson Quotes Generator",
			technologies: "JavaScript",
		},
		{
			url: "../Scatterplot",
			img: "assets/imgs/WebDev/Scatterplot.jpg",
			title: "Scatterplot",
			technologies: "JavaScript + D3",
		},
		{
			url: "../StartupSite",
			img: "assets/imgs/WebDev/StartupSite.jpg",
			title: "Startup Site",
			technologies: "HTML + CSS",
		},
		{
			url: "../animatedGallery",
			img: "assets/imgs/WebDev/animatedGallery.jpg",
			title: "Animated Gallery",
			technologies: "HTML + CSS",
		},
		{
			url: "../flag-game-app",
			img: "assets/imgs/WebDev/flag-game-app.jpg",
			title: "Flag Game",
			technologies: "React",
		},
		{
			url: "../memory-game-app",
			img: "assets/imgs/WebDev/memory-game-app.jpg",
			title: "Memory Game",
			technologies: "React",
		},
		{
			url: "../random-boxes",
			img: "assets/imgs/WebDev/random-boxes.jpg",
			title: "Random Boxes",
			technologies: "React",
		},
		{
			url: "../recipes-app",
			img: "assets/imgs/WebDev/recipes-app.jpg",
			title: "Recipes App",
			technologies: "React",
		},
		{
			url: "../Patatap",
			img: "assets/imgs/WebDev/Patatap.jpg",
			title: "Patatap",
			technologies: "HTML + CSS",
		},
	];

	constructor() {}

	ngOnInit() {}
}
