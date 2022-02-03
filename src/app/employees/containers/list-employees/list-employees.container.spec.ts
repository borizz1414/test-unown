import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesContainer } from './list-employees.container';

describe('ListEmployeesContainer', () => {
  let component: ListEmployeesContainer;
  let fixture: ComponentFixture<ListEmployeesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeesContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
