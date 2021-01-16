import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppprojectsComponent } from './cppprojects.component';

describe('CppprojectsComponent', () => {
  let component: CppprojectsComponent;
  let fixture: ComponentFixture<CppprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
