import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    open: boolean;

    constructor(private router: Router) {
        router.events.subscribe( (event: Event) => {
            if (event instanceof NavigationStart) {
            }

            if (event instanceof NavigationEnd) {
                this.open = false;
            }

            if (event instanceof NavigationError) {
                console.log(event.error);
            }
        });
    }

    toggleMenu() {
        this.open = !this.open;
    }

    ngOnInit() {
        this.open = false;
    }
}

