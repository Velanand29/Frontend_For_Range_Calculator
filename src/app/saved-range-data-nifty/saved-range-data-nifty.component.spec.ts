import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRangeDataNiftyComponent } from './saved-range-data-nifty.component';

describe('SavedRangeDataNiftyComponent', () => {
  let component: SavedRangeDataNiftyComponent;
  let fixture: ComponentFixture<SavedRangeDataNiftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRangeDataNiftyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRangeDataNiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
