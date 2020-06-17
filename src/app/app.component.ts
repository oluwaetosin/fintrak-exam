import { Component } from '@angular/core';

interface IStudent {
  firstname: string;
  surname: string;
  age: number;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fintrakexam';

  ngOninit() {

  }

  seedStudents () {
    const student1: IStudent = '';
    const student2: IStudent = '';
    const student3: IStudent = '';
    const student4: IStudent = '';
    const student5: IStudent = '';

    const allSeedStudents = [student1, student2, student3, student4, student5];
  }
}
