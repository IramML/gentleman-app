import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIllustrationComponent } from './main-illustration.component';

describe('MainIllustrationComponent', () => {
  let component: MainIllustrationComponent;
  let fixture: ComponentFixture<MainIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
