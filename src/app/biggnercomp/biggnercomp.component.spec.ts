import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggnercompComponent } from './biggnercomp.component';

describe('BiggnercompComponent', () => {
  let component: BiggnercompComponent;
  let fixture: ComponentFixture<BiggnercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggnercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggnercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
