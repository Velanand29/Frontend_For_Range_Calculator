import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRangeDataStocksComponent } from './saved-range-data-stocks.component';

describe('SavedRangeDataStocksComponent', () => {
  let component: SavedRangeDataStocksComponent;
  let fixture: ComponentFixture<SavedRangeDataStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRangeDataStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRangeDataStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
