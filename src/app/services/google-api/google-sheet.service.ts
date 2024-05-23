import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService {
  private scriptURL =
    'https://script.google.com/macros/s/AKfycbyyrPcsx4uTQv4Lgdc6nevNncxqo2fxw-fviiLbe6B75Et7m76ZoVBS4RasSOznW7sL/exec';

  constructor(private http: HttpClient) {}

  submitForm(formData: FormData): Observable<any> {
    return this.http.post(this.scriptURL, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
