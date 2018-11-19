import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../Shared/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  // Icons
  faLock = faLock;

  email: string;
  password: string;

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) this.router.navigate (['/']);
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now logged in', {
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
