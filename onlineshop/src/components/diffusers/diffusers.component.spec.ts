import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diffusers } from './diffusers.component';

describe('Diffusers', () => {
  let component: Diffusers;
  let fixture: ComponentFixture<Diffusers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diffusers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diffusers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
