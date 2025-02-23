import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Y5NmIxMmY2NDRjOWFhMTFkZDJlZDYwZGU4MTNkNSIsIm5iZiI6MTczOTkyMTgyMC4xOTEsInN1YiI6IjY3YjUxOTljYmQ1MjNkNWE5YzU2NjhhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NoYASz6I6Iz9C4ROkH9OnaCAeWxhIMY5pK5Ht7HrSNQ'; // 🔥 Reemplaza con tu token real

  constructor(private http: HttpClient) {}

  //Obtener películas populares
  getMovies() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      Accept: 'application/json'
    });

    return this.http.get(`${this.apiUrl}/popular?language=es-ES&page=1`, { headers });
  }

  //Obtener próximos estrenos
  getUpcomingMovies() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      Accept: 'application/json'
    });
  
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c7f96b12f644c9aa11dd2ed60de813d5&language=es-ES&page=1`);;
  }
}


