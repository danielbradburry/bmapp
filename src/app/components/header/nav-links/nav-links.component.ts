import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-links',
    templateUrl: './nav-links.component.html',
    styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

    links: link[];

    constructor() { }

    ngOnInit() {
        this.links = [{
            label: "Home",
            routerLink: "/"
        }, {
            label: "About",
            routerLink: "/about"
        }];
    }

}

interface link {
    label: string;
    routerLink: string;
}