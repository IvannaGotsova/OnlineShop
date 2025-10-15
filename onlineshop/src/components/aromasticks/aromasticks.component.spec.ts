import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaSticks } from './aromasticks.component';

describe('AromaSticks', () => {
  let component: AromaSticks;
  let fixture: ComponentFixture<AromaSticks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AromaSticks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromaSticks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
