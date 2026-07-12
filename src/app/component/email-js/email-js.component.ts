import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common'; // For *ngIf

@Component({
  selector: 'app-email-js',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email-js.component.html',
  styleUrl: './email-js.component.css',
})
export class EmailJSComponent implements OnInit {
  quotationForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quotationForm = this.fb.group({
      title: ['New Quotation Request', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selected_service: ['', Validators.required],
      message: ['', Validators.required],
      time: [''],
    });
  }

  onSubmit(): void {
    if (this.quotationForm.invalid) {
      this.quotationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // Capture the timestamp for your {{time}} field
    const currentTimestamp = new Date().toLocaleString();
    this.quotationForm.patchValue({ time: currentTimestamp });

    const templateParams = this.quotationForm.value;

    emailjs
      .send('service_xat2axd', 'template_ms5kcim', templateParams, {
        publicKey: 'DaB5sO3Vazjq3Rs1X',
      })
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Your quotation request has been sent successfully!');
        this.quotationForm.reset({ title: 'New Quotation Request' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Something went wrong. Please try again.');
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
