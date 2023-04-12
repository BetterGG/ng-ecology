/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ChildTableComponent } from "./childTable.component";

describe("ChildTableComponent", () => {
  let component: ChildTableComponent;
  let fixture: ComponentFixture<ChildTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
