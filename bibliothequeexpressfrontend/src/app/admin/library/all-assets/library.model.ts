import { formatDate } from '@angular/common';
export class Library {
  id: number;
  no: string;
  title: string;
  subject: string;
  date: string;
  department: string;
  type: string;
  status: string;
  constructor(library: Library) {
    {
      this.id = library.id || this.getRandomID();
      this.no = library.no || '';
      this.title = library.title || '';
      this.subject = library.subject || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.department = library.department || '';
      this.type = library.type || '';
      this.status = library.status || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
