import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = ""; 
  errorMessage: string = ""; 
  logoUrl: string = "assets/logo.png";

  validateUserName(): void {
    const regex = /^[A-Z][a-zA-Z]{2,}$/; 
    if (!regex.test(this.userName)) {
      this.errorMessage = "Invalid name! First letter should be capital & min 3 characters.";
    } else {
      this.errorMessage = ""; 
    }
  }
  openBridgeLabz(): void {
    window.open("https://www.bridgelabz.com", "_blank"); // ✅ Open Website in New Tab
  }
}

