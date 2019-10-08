import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteService{
  private baseUrl = 'https://localhost:44302/api/Notes'

  constructor(private http: HttpClient) { }

  listNotes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createNote(note: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, note);
  }



}