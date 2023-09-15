import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRangeDataBankniftyComponent } from './saved-range-data-banknifty.component';

describe('SavedRangeDataBankniftyComponent', () => {
  let component: SavedRangeDataBankniftyComponent;
  let fixture: ComponentFixture<SavedRangeDataBankniftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRangeDataBankniftyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRangeDataBankniftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
