import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';


export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "book", component: BookComponent}
];
