import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcSquadPage } from './wc-squad.page';

describe('WcSquadPage', () => {
  let component: WcSquadPage;
  let fixture: ComponentFixture<WcSquadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcSquadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcSquadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
