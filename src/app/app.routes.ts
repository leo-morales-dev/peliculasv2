import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'upcoming', component: UpcomingComponent },
    { path: '**', redirectTo: 'home' } // Si la ruta no existe, redirige a Home
];
