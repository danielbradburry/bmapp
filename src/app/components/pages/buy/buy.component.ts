import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/services/buy/content.service';

@Component({
    selector: 'buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss'],
    providers: [ContentService]
})
export class BuyComponent implements OnInit {

    content: tab[];
    active: tab;

    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.content = this.contentService.getContent();
        this.active = this.content[0];
    }

    changeContent(tab) {
        this.active = tab;
    }

}

interface tab {
    label: string;
    heading: string;
    content: string;
}