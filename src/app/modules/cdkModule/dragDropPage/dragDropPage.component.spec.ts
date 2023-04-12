/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragDropPageComponent } from './dragDropPage.component';

describe('DragDropPageComponent', () => {
  let component: DragDropPageComponent;
  let fixture: ComponentFixture<DragDropPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
