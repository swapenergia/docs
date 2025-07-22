import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeContainer } from './code-container';

describe('CodeContainer', () => {
  let component: CodeContainer;
  let fixture: ComponentFixture<CodeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
