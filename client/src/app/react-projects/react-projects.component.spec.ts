import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactProjectsComponent } from './react-projects.component';

describe('ReactProjectsComponent', () => {
  let component: ReactProjectsComponent;
  let fixture: ComponentFixture<ReactProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
