import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryInforComponent } from './dictionary-infor.component';

describe('DictionaryInforComponent', () => {
  let component: DictionaryInforComponent;
  let fixture: ComponentFixture<DictionaryInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
