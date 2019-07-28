import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePage } from './main-page.page';

describe('MainPagePage', () => {
  let component: MainPagePage;
  let fixture: ComponentFixture<MainPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
