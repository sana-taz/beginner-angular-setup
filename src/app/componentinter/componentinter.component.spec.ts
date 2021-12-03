import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinterComponent } from './componentinter.component';

describe('ComponentinterComponent', () => {
  let component: ComponentinterComponent;
  let fixture: ComponentFixture<ComponentinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
