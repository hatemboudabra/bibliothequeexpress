import { formatDate } from '@angular/common';
export class Fees {
  id: number;
  rollNo: string;
  sName: string;
  fType: string;
  date: string;
  invoiceNo: string;
  pType: string;
  status: string;
  amount: string;
  constructor(fees: Fees) {
    {
      this.id = fees.id || this.getRandomID();
      this.rollNo = fees.rollNo || '';
      this.sName = fees.sName || '';
      this.fType = fees.fType || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.invoiceNo = fees.invoiceNo || '';
      this.pType = fees.pType || '';
      this.status = fees.status || '';
      this.amount = fees.amount || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
