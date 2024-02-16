export class Homework {
  id: number;
  class: string;
  section: string;
  subject: string;
  homeworkDate: string;
  submissionDate: string;
  evalutionDate: string;
  status: string;
  constructor(homework: Homework) {
    {
      this.id = homework.id || this.getRandomID();
      this.class = homework.class || '';
      this.section = homework.section || '';
      this.subject = homework.subject || '';
      this.homeworkDate = homework.homeworkDate || '';
      this.submissionDate = homework.submissionDate || '';
      this.evalutionDate = homework.evalutionDate || '';
      this.status = homework.status || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
