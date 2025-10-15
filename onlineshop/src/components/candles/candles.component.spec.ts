import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candles } from './candles.component';

describe('Candles', () => {
  let component: Candles;
  let fixture: ComponentFixture<Candles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
