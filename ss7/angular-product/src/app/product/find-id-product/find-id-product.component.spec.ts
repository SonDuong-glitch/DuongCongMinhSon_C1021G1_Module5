import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIdProductComponent } from './find-id-product.component';

describe('FingIdProductComponent', () => {
  let component: FindIdProductComponent;
  let fixture: ComponentFixture<FindIdProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindIdProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindIdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
