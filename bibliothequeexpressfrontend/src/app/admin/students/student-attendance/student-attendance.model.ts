import { formatDate } from '@angular/common';
export class StudentAttendance {
  id: number;
  img: string;
  rollNo: string;
  sName: string;
  class: string;
  date: string;
  status: string;
  note: string;
  constructor(studentAttendance: StudentAttendance) {
    {
      this.id = studentAttendance.id || this.getRandomID();
      this.img = studentAttendance.img || 'assets/images/user/user1.jpg';
      this.rollNo = studentAttendance.rollNo || '';
      this.sName = studentAttendance.sName || '';
      this.class = studentAttendance.class || '';
      this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.status = studentAttendance.status || '';
      this.note = studentAttendance.note || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
