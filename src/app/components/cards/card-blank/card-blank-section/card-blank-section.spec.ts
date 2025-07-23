import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlankSection } from './card-blank-section';

describe('CardBlankSection', () => {
  let component: CardBlankSection;
  let fixture: ComponentFixture<CardBlankSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBlankSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBlankSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
