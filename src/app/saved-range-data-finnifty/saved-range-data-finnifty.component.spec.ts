import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRangeDataFinniftyComponent } from './saved-range-data-finnifty.component';

describe('SavedRangeDataFinniftyComponent', () => {
  let component: SavedRangeDataFinniftyComponent;
  let fixture: ComponentFixture<SavedRangeDataFinniftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRangeDataFinniftyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRangeDataFinniftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
