import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

    newsletters: any;
    error: string;

    constructor(private http:HttpClient) { }

    ngOnInit() {
        this.http.get('http://mageerealtors.com/services/newsletters.php').subscribe(
            data => {
                this.newsletters = data;
            },
            err => {
                console.error(err);
                this.error = err;
            }
        );
    }

}
