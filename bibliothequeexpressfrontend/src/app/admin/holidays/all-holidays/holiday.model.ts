import { formatDate } from '@angular/common';
export class Holiday {
  id: number;
  no: string;
  title: string;
  sDate: string;
  eDate: string;
  type: string;
  details: string;
  constructor(holiday: Holiday) {
    {
      this.id = holiday.id || this.getRandomID();
      this.no = holiday.no || '';
      this.title = holiday.title || '';
      this.sDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.eDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.type = holiday.type || '';
      this.details = holiday.details || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
