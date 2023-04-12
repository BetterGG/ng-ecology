/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogPageComponent } from './dialogPage.component';

describe('DialogPageComponent', () => {
  let component: DialogPageComponent;
  let fixture: ComponentFixture<DialogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
