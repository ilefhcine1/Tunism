import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTouristComponent } from './signup-tourist.component';

describe('SignupTouristComponent', () => {
  let component: SignupTouristComponent;
  let fixture: ComponentFixture<SignupTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupTouristComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
