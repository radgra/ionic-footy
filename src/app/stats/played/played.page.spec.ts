import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedPage } from './played.page';

describe('PlayedPage', () => {
  let component: PlayedPage;
  let fixture: ComponentFixture<PlayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
