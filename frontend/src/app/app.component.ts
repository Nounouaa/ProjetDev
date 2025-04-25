import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = '';

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
    // this.apiService.getTest().subscribe(data => {
    //   this.message = data.message; // Adaptez selon la structure de la réponse API
    // });
    
  }
} 
