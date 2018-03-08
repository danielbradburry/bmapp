import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    items1: link[];
    items2: link[];
    heroes: string[];
    hero: string;
    newHero: string;
    animating: boolean;
    currentHero: number;

    constructor() { }

    ngOnInit() {
        let currentHero = 2,
            animateTimer = 6000;

        this.heroes = [
            'assets/images/hero1.jpg',
            'assets/images/hero2.jpg',
            'assets/images/hero3.jpg'
        ];

        this.hero = this.heroes[1];
        this.newHero = this.heroes[0];
        this.animating = false;

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
            source: "assets/images/listings.jpg",
            routerLink: "listings"
        }, {
            name: "Magee Newsletter",
            source: "assets/images/newsletter.jpg",
            routerLink: "newsletter"
        }];

        setInterval(()=>{
            this.animateHero(this.heroes[currentHero]);
            currentHero = currentHero === (this.heroes.length - 1) ? 0 : (currentHero + 1);
        }, animateTimer);
    }

    animateHero(newHero) {
        this.animating = true;
        setTimeout(()=> {
            this.newHero = this.hero;
            this.animating = false;
        }, 1000);
        setTimeout(()=> {
            this.hero = newHero;
        }, 2000);
    }
}

interface link {
    name: string;
    source: string;
    routerLink: string;
}
