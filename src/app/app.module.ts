import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavLinksComponent } from './components/header/nav-links/nav-links.component';
import { BuyComponent } from './components/pages/buy/buy.component';
import { SellComponent } from './components/pages/sell/sell.component';
import { NewhomeComponent } from './components/pages/newhome/newhome.component';
import { ListingsComponent } from './components/pages/listings/listings.component';
import { NewsletterComponent } from './components/pages/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const appRoutes: Routes = [{
    path: '', 
    component: HomeComponent
}, {
    path: 'about', 
    component: AboutComponent
}, {
    path: 'contact', 
    component: ContactComponent
}, {
    path: 'buy', 
    component: BuyComponent
}, {
    path: 'sell', 
    component: SellComponent
}, {
    path: 'newhome', 
    component: NewhomeComponent
}, {
    path: 'listings', 
    component: ListingsComponent
}, {
    path: 'newsletter', 
    component: NewsletterComponent
}];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutComponent,
        HomeComponent,
        NavLinksComponent,
        BuyComponent,
        SellComponent,
        NewhomeComponent,
        ListingsComponent,
        NewsletterComponent,
        FooterComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
