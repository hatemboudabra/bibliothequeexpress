import { Component } from '@angular/core';

@Component({
  selector: 'app-fee-receipt',
  templateUrl: './fee-receipt.component.html',
  styleUrls: ['./fee-receipt.component.scss'],
})
export class FeeReceiptComponent {
  breadscrums = [
    {
      title: 'Receipt',
      items: ['Fees'],
      active: 'Receipt',
    },
  ];
  constructor() {
    //constructor
  }
}
