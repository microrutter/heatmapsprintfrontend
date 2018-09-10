import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelabelSprintComponent } from './relabel-sprint.component';

describe('RelabelSprintComponent', () => {
  let component: RelabelSprintComponent;
  let fixture: ComponentFixture<RelabelSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelabelSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelabelSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
