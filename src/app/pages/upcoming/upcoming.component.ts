import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Importar RouterModule

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Agregar RouterModule aquí
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent implements OnInit {
  upcomingMovies: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getUpcomingMovies().subscribe((data: any) => {
      this.upcomingMovies = data.results;
    });
  }
}
