import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

interface DiscountRule {
  restaurant: string;
  discountPercent: number;
  minAmount: number;
  date: string; // yyyy-mm-dd
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
}

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './discount.component.html'
})
export class DiscountComponent {
  // Example discount rules
  rules: DiscountRule[] = [
    {
      restaurant: 'Acme Diner',
      discountPercent: 10,
      minAmount: 50,
      date: '2024-12-01',
      startTime: '17:00',
      endTime: '20:00'
    },
    {
      restaurant: 'Bella Pasta',
      discountPercent: 15,
      minAmount: 40,
      date: '2024-12-01',
      startTime: '12:00',
      endTime: '14:00'
    }
  ];

  form = this.fb.group({
    restaurant: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
    orderTime: ['', Validators.required]
  });

  result = '';

  constructor(private fb: FormBuilder) {}

  checkDiscount() {
    const value = this.form.value;
    const rule = this.rules.find(r => r.restaurant === value.restaurant);
    if (!rule) {
      this.result = 'No discount rule for restaurant.';
      return;
    }
    const selectedTime = new Date(value.orderTime!);
    const ruleDate = rule.date + 'T00:00';
    const start = new Date(rule.date + 'T' + rule.startTime);
    const end = new Date(rule.date + 'T' + rule.endTime);
    if (
      value.amount! >= rule.minAmount &&
      selectedTime >= start &&
      selectedTime <= end
    ) {
      this.result = `Discount applied: ${rule.discountPercent}% off.`;
    } else {
      this.result = 'Order does not qualify for discount.';
    }
  }
}
