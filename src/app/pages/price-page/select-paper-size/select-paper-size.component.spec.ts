import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPaperSizeComponent } from './select-paper-size.component';

describe('SelectPaperSizeComponent', () => {
  let component: SelectPaperSizeComponent;
  let fixture: ComponentFixture<SelectPaperSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectPaperSizeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPaperSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectedPaperSize on initialization', () => {
    spyOn(component.selectValue, 'emit');

    component.ngOnInit();

    expect(component.selectValue.emit).toHaveBeenCalledWith(component.selectedPaperSize);
  });

  it('should emit selected paper size when applySelection is called', () => {
    const selectedSize = 'A5';
    spyOn(component.selectValue, 'emit');

    component.applySelection(selectedSize);

    expect(component.selectValue.emit).toHaveBeenCalledWith(selectedSize);
  });
});
