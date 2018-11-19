import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SettingsService } from '../../../Shared/services/settings.service';

import { Settings } from '../../../Shared/models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: ['input { margin-left: 10px }']
})
export class SettingsComponent implements OnInit {

  // Icons
  faArrowCircleLeft = faArrowCircleLeft;

  settings: Settings;

  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessage.show('Settings saved', {
      cssClass: 'alert-success', timeout: 4000
    });
  }

}
