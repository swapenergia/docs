import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McpsPage } from './mcps-page';

describe('McpsPage', () => {
  let component: McpsPage;
  let fixture: ComponentFixture<McpsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McpsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
