import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onClickHandler = () => {
    this.password = 'my password';
  };
}
