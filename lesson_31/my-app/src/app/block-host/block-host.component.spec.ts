import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHostComponent } from './block-host.component';

describe('BlockHostComponent', () => {
  let component: BlockHostComponent;
  let fixture: ComponentFixture<BlockHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
