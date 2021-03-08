import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColComponent } from './footer-col.component';

describe('FooterColComponent', () => {
  let component: FooterColComponent;
  let fixture: ComponentFixture<FooterColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
