import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainWeatherPage } from './main-weather.page';

describe('MainWeatherPage', () => {
  let component: MainWeatherPage;
  let fixture: ComponentFixture<MainWeatherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
