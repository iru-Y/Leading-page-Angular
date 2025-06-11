import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endPointUrl = '';
  constructor(private http: HttpClient) { 
    
  }

  sendDate(name: string, email: string): Observable<NewLetterResponse> {
    const data = {name, email};

    return this.http.post(this.endPointUrl, data);
  }
}
