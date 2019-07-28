import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcTablesPage } from './wc-tables.page';

describe('WcTablesPage', () => {
  let component: WcTablesPage;
  let fixture: ComponentFixture<WcTablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcTablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcTablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
