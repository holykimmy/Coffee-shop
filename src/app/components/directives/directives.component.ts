import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  students = [
    {
      name: 'Mickey',
      email: 'Mickey@gmail.com',
      major: 'CS',
      year: 'Second',
    },
    {
      name: 'Minney',
      email: 'Minney@gmail.com',
      major: 'CS',
      year: 'Third',
    },
    {
      name: 'Kuromi',
      email: 'kuromi@gmail.com',
      major: 'CS',
      year: 'Third',
    },
    {
      name: 'Myelody',
      email: 'mymelody@gmail.com',
      major: 'CS',
      year: 'Second',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
