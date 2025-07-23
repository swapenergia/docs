import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlank } from './card-blank';

describe('CardBlank', () => {
  let component: CardBlank;
  let fixture: ComponentFixture<CardBlank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBlank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBlank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
