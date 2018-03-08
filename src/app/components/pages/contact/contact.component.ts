import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    first: string;
    last: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    inquiry: string;
    timeframe: string;

    options: string[];
    states: string[];
    message: any;
    loading: boolean;
    submitted: boolean;
    error: string;

    constructor(private http:HttpClient) { }

    ngOnInit() {
        this.options = [
            'Buying',
            'Selling'
        ];

        this.states = [
            'AL',
            'AK',
            'AZ',
            'AR',
            'CA',
            'CO',
            'CT',
            'DE',
            'FL',
            'GA',
            'HI',
            'ID',
            'IL',
            'IN',
            'IA',
            'KS',
            'KY',
            'LA',
            'ME',
            'MD',
            'MA',
            'MI',
            'MN',
            'MS',
            'MO',
            'MT',
            'NE',
            'NV',
            'NH',
            'NJ',
            'NM',
            'NY',
            'NC',
            'ND',
            'OH',
            'OK',
            'OR',
            'PA',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VT',
            'VA',
            'WA',
            'WV',
            'WI',
            'WY'
        ];

        this.state = 'TX';
        this.inquiry = 'Buying';
    }

    submit(data) {
        console.log(data);
        this.loading = true;
        this.http.post('http://mageerealtors.com/services/contact.php', data).subscribe(
            data => { 
                this.message = data;
                this.submitted = true;
                this.loading = false;
            },
            err => {
                console.error(err);
                this.error = err;
                this.submitted = false;
                this.loading = false;
            }
        );
    }

}
