import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCardComponent } from './wc-card.component';

describe('WcCardComponent', () => {
  let component: WcCardComponent;
  let fixture: ComponentFixture<WcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
