import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../Shared/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  // Icons
  faLock = faLock;

  email: string;
  password: string;

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now registered and logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

}
