import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDualListComponent } from './custom-dual-list.component';

describe('CustomDualListComponent', () => {
  let component: CustomDualListComponent;
  let fixture: ComponentFixture<CustomDualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomDualListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
