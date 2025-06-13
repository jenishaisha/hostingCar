import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlockComponent } from './home-block.component';

describe('HomeBlockComponent', () => {
  let component: HomeBlockComponent;
  let fixture: ComponentFixture<HomeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
