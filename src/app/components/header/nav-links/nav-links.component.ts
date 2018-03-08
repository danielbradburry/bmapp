import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'nav-links',
    templateUrl: './nav-links.component.html',
    styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

    links: any[];

    constructor(private router: Router) {
        router.events.subscribe( (event: Event) => {
            if (event instanceof NavigationStart) {
                this.links.forEach(function(link) {
                    link.open = false;
                });
            }

            if (event instanceof NavigationEnd) {
            }

            if (event instanceof NavigationError) {
                console.log(event.error);
            }
        });
    }

    ngOnInit() {
        this.links = [{
            label: 'Home',
            routerLink: "/"
        }, {
            label: 'Our Services',
            links: [{
                label: "Buy",
                routerLink: "/buy"
            }, {
                label: "Sell",
                routerLink: "/sell"
            }, {
                label: "New Home",
                routerLink: "/newhome"
            }, {
                label: "Listings",
                routerLink: "/listings"
            }]
        }, {
            label: 'Our Company',
            links: [{
                label: "About",
                routerLink: "/about"
            }, {
                label: "Contact",
                routerLink: "/contact"
            }, {
                label: "Newsletter",
                routerLink: "/newsletter"
            }]
        }];
    }

    toggleOpen(link) {
        let state = !link.open;
        this.links.forEach(function(link) {
            link.open = false;
        });
        link.open = state;
    }
}

interface link {
    label: string;
    routerLink: string;
}

interface linkGroup {
    label: string;
    links: link;
    open: boolean;
}