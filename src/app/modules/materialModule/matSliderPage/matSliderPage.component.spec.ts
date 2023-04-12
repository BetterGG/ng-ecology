/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MatSliderPageComponent } from "./matSliderPage.component";

describe("MatSliderPageComponent", () => {
  let component: MatSliderPageComponent;
  let fixture: ComponentFixture<MatSliderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatSliderPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSliderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
