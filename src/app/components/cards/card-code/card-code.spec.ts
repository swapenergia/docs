import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCode } from './card-code';

describe('CardCode', () => {
  let component: CardCode;
  let fixture: ComponentFixture<CardCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
