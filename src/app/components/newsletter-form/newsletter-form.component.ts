import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.css'
})
export class NewsletterFormComponent {
  newsLetterForm!: FormGroup;

  constructor() {
    this.newsLetterForm = new FormGroup({
      name: new FormControl('',[Validators.required]), 
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }


  onSubmit() {
    
  }
}
