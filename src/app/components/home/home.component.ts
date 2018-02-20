import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    items1: link[];
    items2: link[];
    hero: string;

    constructor() { }

    ngOnInit() {
        this.hero = 'assets/images/lakefront.jpg';

        this.items1 = [{
            name: "Buy",
            source: "assets/images/buy.jpg",
            routerLink: "buy"
        }, {
            name: "Sell",
            source: "assets/images/front.jpg",
            routerLink: "sell"
        }, {
            name: "New Home",
            source: "assets/images/new.jpg",
            routerLink: "newhome"
        }];

        this.items2 = [{
            name: "Our Listings",
            source: "assets/images/kitchen.jpg",
            routerLink: "listings"
        }, {
            name: "Magee Newsletter",
            source: "assets/images/bedroom.jpg",
            routerLink: "newsletter"
        }];
    }
}

interface link {
    name: string;
    source: string;
    routerLink: string;
}
