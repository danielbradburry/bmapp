import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavLinksComponent } from './components/header/nav-links/nav-links.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { NewhomeComponent } from './components/newhome/newhome.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [{
    path: '', 
    component: HomeComponent
}, {
    path: 'about', 
    component: AboutComponent
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
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
