import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardText } from './card-text';

describe('CardText', () => {
  let component: CardText;
  let fixture: ComponentFixture<CardText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
