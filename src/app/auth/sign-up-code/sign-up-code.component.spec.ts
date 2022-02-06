import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCodeComponent } from './sign-up-code.component';

describe('SignUpCodeComponent', () => {
  let component: SignUpCodeComponent;
  let fixture: ComponentFixture<SignUpCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
