import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnfromhereComponent } from './learnfromhere.component';

describe('LearnfromhereComponent', () => {
  let component: LearnfromhereComponent;
  let fixture: ComponentFixture<LearnfromhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnfromhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnfromhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
