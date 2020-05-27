import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-architecture",
	templateUrl: "./architecture.component.html",
	styleUrls: ["./architecture.component.scss"],
})
export class ArchitectureComponent implements OnInit {
	data = [
		{
			img: "assets/imgs/AG/hotelCzorsztyn/wizualizacja3.jpg",
			title: "Projekt hotelu w Czorsztynie",
			hidden: true,
			images: [
				"assets/imgs/AG/hotelCzorsztyn/PLANSZA1.jpg",
				"assets/imgs/AG/hotelCzorsztyn/PLANSZA2.jpg",
				"assets/imgs/AG/hotelCzorsztyn/PLANSZA3.jpg",
				"assets/imgs/AG/hotelCzorsztyn/PLANSZA4.jpg",
				"assets/imgs/AG/hotelCzorsztyn/wizualizacja1.jpg",
				"assets/imgs/AG/hotelCzorsztyn/wizualizacja2.jpg",
				"assets/imgs/AG/hotelCzorsztyn/wizualizacja3.jpg",
				"assets/imgs/AG/hotelCzorsztyn/wizualizacja4.jpg",
				"assets/imgs/AG/hotelCzorsztyn/ZAGOSPODAROWANIE.jpg",
				"assets/imgs/AG/hotelCzorsztyn/PARTER.jpg",
				"assets/imgs/AG/hotelCzorsztyn/PIWNICA.jpg",
				"assets/imgs/AG/hotelCzorsztyn/PIETRO.jpg",
				"assets/imgs/AG/hotelCzorsztyn/elewacja1.jpg",
				"assets/imgs/AG/hotelCzorsztyn/elewacja2.jpg",
				"assets/imgs/AG/hotelCzorsztyn/elewacja3.jpg",
				"assets/imgs/AG/hotelCzorsztyn/przekroj1.jpg",
				"assets/imgs/AG/hotelCzorsztyn/przekroj2.jpg",
				"assets/imgs/AG/hotelCzorsztyn/przekroj3.jpg",
			],
		},

		{
			img: "assets/imgs/AG/domMiejski/wizualizacja2.jpg",
			title: "Projekt osiedla w Chorzowie",
			hidden: true,
			images: [
				"assets/imgs/AG/domMiejski/PLANSZA1.jpg",
				"assets/imgs/AG/domMiejski/PLANSZA2.jpg",
				"assets/imgs/AG/domMiejski/wizualizacja1.jpg",
				"assets/imgs/AG/domMiejski/wizualizacja2.jpg",
				"assets/imgs/AG/domMiejski/ZAGOSPODAROWANIE.jpg",
				"assets/imgs/AG/domMiejski/ELEWACJE.jpg",
				"assets/imgs/AG/domMiejski/SCIANY.jpg",
				"assets/imgs/AG/domMiejski/RZUTY.jpg",
				"assets/imgs/AG/domMiejski/PRZEKROJE.jpg",
				"assets/imgs/AG/domMiejski/WNETRZE1.jpg",
				"assets/imgs/AG/domMiejski/WNETRZE2.jpg",
			],
		},

		{
			img: "assets/imgs/AG/osrodekNarciarski/wizualizacja4.jpg",
			title: "Projekt ośrodka narciarskiego w Szczyrku",
			hidden: true,
			images: [
				"assets/imgs/AG/osrodekNarciarski/PLANSZA1.jpg",
				"assets/imgs/AG/osrodekNarciarski/PLANSZA2.jpg",
				"assets/imgs/AG/osrodekNarciarski/PLANSZA3.jpg",
				"assets/imgs/AG/osrodekNarciarski/PLANSZA4.jpg",
				"assets/imgs/AG/osrodekNarciarski/PLANSZA5.jpg",
				"assets/imgs/AG/osrodekNarciarski/PLANSZA6.jpg",
				"assets/imgs/AG/osrodekNarciarski/PLANSZA7.jpg",
				"assets/imgs/AG/osrodekNarciarski/ZAGOSPODAROWANIE.jpg",
				"assets/imgs/AG/osrodekNarciarski/PARTER.jpg",
				"assets/imgs/AG/osrodekNarciarski/PIETRO.jpg",
				"assets/imgs/AG/osrodekNarciarski/PIETRO2.jpg",
				"assets/imgs/AG/osrodekNarciarski/PIETRO3.jpg",
				"assets/imgs/AG/osrodekNarciarski/PRZEKROJE.jpg",
				"assets/imgs/AG/osrodekNarciarski/wizualizacja5.jpg",
				"assets/imgs/AG/osrodekNarciarski/wizualizacja1.jpg",
				"assets/imgs/AG/osrodekNarciarski/wizualizacja2.jpg",
				"assets/imgs/AG/osrodekNarciarski/wizualizacja3.jpg",
				"assets/imgs/AG/osrodekNarciarski/wizualizacja4.jpg",
				"assets/imgs/AG/osrodekNarciarski/ELEWACJA1.jpg",
				"assets/imgs/AG/osrodekNarciarski/ELEWACJA2.jpg",
				"assets/imgs/AG/osrodekNarciarski/ELEWACJA4.jpg",
			],
		},

		{
			img: "assets/imgs/AG/halaWystawiennicza/wizualizacja1.jpg",
			title: "Projekt hali wystawienniczej w Gliwicach",
			hidden: true,
			images: [
				"assets/imgs/AG/halaWystawiennicza/PLANSZA1.jpg",
				"assets/imgs/AG/halaWystawiennicza/PLANSZA2.jpg",
				"assets/imgs/AG/halaWystawiennicza/PLANSZA3.jpg",
				"assets/imgs/AG/halaWystawiennicza/ZAGOSPODAROWANIE.jpg",
				"assets/imgs/AG/halaWystawiennicza/PARTER.jpg",
				"assets/imgs/AG/halaWystawiennicza/PIETRO.jpg",
				"assets/imgs/AG/halaWystawiennicza/wizualizacja1.jpg",
				"assets/imgs/AG/halaWystawiennicza/wizualizacja2.jpg",
				"assets/imgs/AG/halaWystawiennicza/wizualizacja3.jpg",
				"assets/imgs/AG/halaWystawiennicza/ELEWACJE1.jpg",
				"assets/imgs/AG/halaWystawiennicza/ELEWACJE2.jpg",
				"assets/imgs/AG/halaWystawiennicza/PRZEKROJE.jpg",
			],
		},

		{
			img: "assets/imgs/AG/mieszkaniowkaTychy/wizualizacja1.jpg",
			title: "Projekt osiedla mieszkaniowego w Tychach",
			hidden: true,
			images: [
				"assets/imgs/AG/mieszkaniowkaTychy/PLANSZA1.jpg",
				"assets/imgs/AG/mieszkaniowkaTychy/PLANSZA2.jpg",
				"assets/imgs/AG/mieszkaniowkaTychy/PLANSZA3.jpg",
				"assets/imgs/AG/mieszkaniowkaTychy/PLANSZA4.jpg",
				"assets/imgs/AG/mieszkaniowkaTychy/wizualizacja1.jpg",
				"assets/imgs/AG/mieszkaniowkaTychy/wizualizacja2.jpg",
				"assets/imgs/AG/mieszkaniowkaTychy/wizualizacja3.jpg",
			],
		},

		{
			img: "assets/imgs/AG/schroniskoTokarnia/wizualizacja2.jpg",
			title: "Projekt schroniska górskiego na Tokarnii",
			hidden: true,
			images: [
				"assets/imgs/AG/schroniskoTokarnia/PLANSZA1.jpg",
				"assets/imgs/AG/schroniskoTokarnia/PLANSZA2.jpg",
				"assets/imgs/AG/schroniskoTokarnia/PLANSZA3.jpg",
				"assets/imgs/AG/schroniskoTokarnia/PLANSZA4.jpg",
				"assets/imgs/AG/schroniskoTokarnia/ZAGOSPODAROWANIE.jpg",
				"assets/imgs/AG/schroniskoTokarnia/PARTER.jpg",
				"assets/imgs/AG/schroniskoTokarnia/wizualizacja1.jpg",
				"assets/imgs/AG/schroniskoTokarnia/wizualizacja2.jpg",
				"assets/imgs/AG/schroniskoTokarnia/ELEWACJA1.jpg",
				"assets/imgs/AG/schroniskoTokarnia/ELEWACJA2.jpg",
				"assets/imgs/AG/schroniskoTokarnia/ELEWACJA3.jpg",
				"assets/imgs/AG/schroniskoTokarnia/ELEWACJA4.jpg",
			],
		},
	];
	constructor() {}

	ngOnInit() {}
}
