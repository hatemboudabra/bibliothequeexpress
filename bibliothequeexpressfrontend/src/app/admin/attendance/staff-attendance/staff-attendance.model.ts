export class StaffAttendance {
  id: number;
  img: string;
  name: string;
  check_in: string;
  break: string;
  check_out: string;
  total: string;
  status: string;
  department: string;

  constructor(staffAttendance: StaffAttendance) {
    {
      this.id = staffAttendance.id || this.getRandomID();
      this.img = staffAttendance.img || 'assets/images/user/usrbig1.jpg';
      this.name = staffAttendance.name || '';
      this.check_in = staffAttendance.check_in || '';
      this.break = staffAttendance.break || '';
      this.check_out = staffAttendance.check_out || '';
      this.total = staffAttendance.total || '';
      this.status = staffAttendance.status || '';
      this.department = staffAttendance.department || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
