import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeMorePage } from './see-more.page';

describe('SeeMorePage', () => {
  let component: SeeMorePage;
  let fixture: ComponentFixture<SeeMorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
