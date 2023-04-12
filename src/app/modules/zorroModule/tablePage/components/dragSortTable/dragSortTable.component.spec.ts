/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { DragSortTableComponent } from "./dragSortTable.component";

describe("DragSortTableComponent", () => {
  let component: DragSortTableComponent;
  let fixture: ComponentFixture<DragSortTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragSortTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragSortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
