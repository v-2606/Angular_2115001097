import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz! 🚀"; 
  logoUrl: string = "assets/logo.png"; 

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}

