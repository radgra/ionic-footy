import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCupDetailPage } from './world-cup-detail.page';

describe('WorldCupDetailPage', () => {
  let component: WorldCupDetailPage;
  let fixture: ComponentFixture<WorldCupDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCupDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCupDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
