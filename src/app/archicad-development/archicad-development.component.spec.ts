import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchicadDevelopmentComponent } from './archicad-development.component';

describe('ArchicadDevelopmentComponent', () => {
  let component: ArchicadDevelopmentComponent;
  let fixture: ComponentFixture<ArchicadDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchicadDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchicadDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
