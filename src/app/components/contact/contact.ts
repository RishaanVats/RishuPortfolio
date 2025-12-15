import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import emailjs from '@emailjs/browser';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { environment } from '../../../environments/environment';
import { db } from '../../firebase'; // adjust path if needed

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, A11yModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  constructor(private cdr: ChangeDetectorRef, private liveAnnouncer: LiveAnnouncer) {
    emailjs.init(this.public_key);
  }
  sending = false;
  currentTime: string = new Date().toLocaleString();

  alert = {
    type: '' as 'success' | 'warning',
    message: '',
    hiding: false,
    rendered: false, // DOM exists
  };

  service_id: string = environment.emailjs.serviceId;
  template_id: string = environment.emailjs.templateId;
  public_key: string = environment.emailjs.publicKey;

  showAlert(type: 'success' | 'warning', message: string, duration = 3500) {
    this.alert.type = type;
    this.alert.message = message;
    this.alert.rendered = true;
    this.alert.hiding = false;
    this.cdr.detectChanges(); // ✅ re-render to add alert to DOM

    // ✅ Announce to screen readers
    this.liveAnnouncer.announce(message, 'assertive');

    setTimeout(() => {
      this.startHide();
      this.cdr.detectChanges(); // ✅ re-render after timeout
    }, duration);
  }

  startHide() {
    this.alert.hiding = true;
    this.cdr.detectChanges(); // ✅ re-render to hide alert

    setTimeout(() => {
      this.alert.hiding = false;
      this.alert.rendered = false;
      this.cdr.detectChanges(); // ✅ re-render to remove from DOM
    }, 400); // Match CSS transition duration
  }

  saveToFirestore(formValue: any) {
    return addDoc(collection(db, 'contactMessages'), {
      name: formValue.user_name,
      email: formValue.user_email,
      message: formValue.message,
      createdAt: serverTimestamp(),
    });
  }

  sendEmailNotification(form: HTMLFormElement) {
    return emailjs.sendForm(
      this.service_id,
      this.template_id,
      form,
      this.public_key
    );
  }

  submit(form: any, event: Event): void {
    console.log('SUBMIT CALLED', {
      valid: form.valid,
      sending: this.sending,
      value: form.value,
    });

    if (form.invalid || this.sending) return;
    if (form.value.company) return; // honeypot for spam bots
    const htmlForm = event.target as HTMLFormElement;

    this.sending = true;

    this.saveToFirestore(form.value)
      .then(() => {
        //  real success (data saved)
        this.showAlert('success', 'Your message has been delivered and securely logged for reliability. I will get back to you soon.');

        this.liveAnnouncer.announce('Message sent successfully.', 'assertive');

        // ✅ optional email notification (best effort)
        this.sendEmailNotification(htmlForm)
          .then((pass) => {
            console.log('Email notification sending attempted.');
          })
          .catch((err) => {
            console.warn('Email notification failed — message safely stored.',);
          });
      })
      .catch(() => {
        this.showAlert('warning', 'Sorry, something went wrong. Please try again later.');
      })
      .finally(() => {
        this.sending = false;
        this.cdr.detectChanges();
        form.reset();
      });
  }
}
