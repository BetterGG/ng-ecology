/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MatTablePageComponent } from "./matTablePage.component";

describe("MatTablePageComponent", () => {
  let component: MatTablePageComponent;
  let fixture: ComponentFixture<MatTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatTablePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
