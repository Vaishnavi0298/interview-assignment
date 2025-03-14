import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.scss'
})
export class EmiCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  tenure: number = 0;
  emi: number | null = null;

  calculateEMI() {
    if (this.loanAmount > 0 && this.interestRate > 0 && this.tenure > 0) {
      let monthlyInterestRate = this.interestRate / 12 / 100;
      let months = this.tenure * 12;
      this.emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
                 (Math.pow(1 + monthlyInterestRate, months) - 1);
    } else {
      this.emi = null;
    }
  }
}
