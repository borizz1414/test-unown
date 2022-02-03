import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/core/services/jobs.service';
import { DATA } from 'src/app/data/employees';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss'],
})
export class AddEmployeesComponent implements OnInit {
  form: FormGroup;
  options = [
    'full-stack developer',
    'front-end developer',
    'sw admin',
    'help desk',
    'scrum master',
    'product manager',
  ];
  constructor(
    private fb: FormBuilder,
    private _jobs: JobsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getJobs();
  }
  send() {
    console.log(this.form.value);
    DATA.push(this.form.value);
    console.log(DATA);
    this.router.navigate(['/']);
  }
  getJobs() {
    this._jobs.getJobs().subscribe((res) => (this.options = res.positions));
    console.log(this.options);
  }
}
