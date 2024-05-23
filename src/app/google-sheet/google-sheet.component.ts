import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleSheetService } from '../services/google-api/google-sheet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-google-sheet',
  templateUrl: './google-sheet.component.html',
  styleUrls: ['./google-sheet.component.scss'],
})
export class GoogleSheetComponent {
  contactForm!: FormGroup;
  private scriptURL =
    'https://script.google.com/macros/s/AKfycbyyrPcsx4uTQv4Lgdc6nevNncxqo2fxw-fviiLbe6B75Et7m76ZoVBS4RasSOznW7sL/exec';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private googleSheetService: GoogleSheetService
  ) {
    this.contactForm = this.fb.group({
      yourName: ['', Validators.required],
      yourNumber: ['', Validators.required],
      yourEmail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
      Object.keys(this.contactForm.controls).forEach((key) => {
        formData.append(key, this.contactForm.get(key)?.value);
      });

      fetch(this.scriptURL, { method: 'POST', body: formData })
        .then((response) => {
          console.log('respost', response);
          alert('Thank you! your form is submitted successfully.');
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => console.error('Error!', error.message));

      this.googleSheetService.submitForm(formData).subscribe({
        next: (res) => {
          console.log('res', res);
        },
        error: (err) => {
          console.log('err', err);
        },
      });
    }
  }
}
