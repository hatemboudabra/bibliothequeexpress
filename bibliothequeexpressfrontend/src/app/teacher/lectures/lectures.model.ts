export class Lectures {
  id: number;
  sName: string;
  class: string;
  date: string;
  time: string;
  status: string;
  constructor(lectures: Lectures) {
    {
      this.id = lectures.id || this.getRandomID();
      this.sName = lectures.sName || '';
      this.class = lectures.class || '';
      this.date = lectures.date || '';
      this.time = lectures.time || '';
      this.status = lectures.status || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
