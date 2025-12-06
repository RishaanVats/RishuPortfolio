import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  submit() {
    alert(
      'Thank you for reaching out! I will get back to you soon. Meanwhile, feel free to explore my portfolio further.'
    );
    throw new Error('Method not implemented.');
  }
}
