import { Component } from '@angular/core';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.css'
})
export class EnquiryFormComponent {
  enquiry = {
    name: '',
    email: '',
    serviceType: '',
    message: ''
  };

  serviceOptions = [
    'Branding and Communication',
    'Inbound & Content Marketing',
    'Film & Webinar',
    'Digital Marketing',
    'ECommerce & Websites',
    'Market Analysis'
  ];

  submitForm() {
    console.log("Form Submitted:", this.enquiry);
  }
}
