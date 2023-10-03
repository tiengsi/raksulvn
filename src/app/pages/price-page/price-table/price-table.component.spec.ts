import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceTableComponent } from './price-table.component';

describe('PriceTableComponent', () => {
  let component: PriceTableComponent;
  let fixture: ComponentFixture<PriceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit currentIndex on initialization', () => {
    spyOn(component.currentIndex, 'emit');

    component.ngOnChanges({ priceData: { currentValue: [], previousValue: undefined, isFirstChange: () => true } as any });

    expect(component.currentIndex.emit).toHaveBeenCalledWith(component.selectedIndex);
  });

  it('should select price and emit currentIndex', () => {
    const i = 1;
    const j = 2;
    spyOn(component.currentIndex, 'emit');

    component.selectPrice(i, j);

    expect(component.selectedIndex).toEqual({ currentRow: i, currentCol: j });
    expect(component.currentIndex.emit).toHaveBeenCalledWith(component.selectedIndex);
  });

  it('should toggle isShowMore when showMore is called', () => {
    component.isShowMore = false;

    component.showMore();
    expect(component.isShowMore).toBe(true);

    component.showMore();
    expect(component.isShowMore).toBe(false);
  });
});
