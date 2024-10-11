import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  constructor(private router: Router, private alertController: AlertController) { }

  async showLocationPrompt() {
    const alert = await this.alertController.create({
      header: 'Turn on your location services',
      message: 'To provide accurate weather forecasts, we need to access your location.',
      buttons: [
        {
          text: 'Turn On',
          handler: () => {
            this.router.navigate(['/home']);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // No action needed, the aler t will be dismissed
          }
        }
      ]
    });

    await alert.present();
  }
}
