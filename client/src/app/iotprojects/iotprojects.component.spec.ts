import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotprojectsComponent } from './iotprojects.component';

describe('IotprojectsComponent', () => {
  let component: IotprojectsComponent;
  let fixture: ComponentFixture<IotprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
