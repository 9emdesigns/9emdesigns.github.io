import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignConceptComponent } from './design-concept.component';

describe('DesignConceptComponent', () => {
  let component: DesignConceptComponent;
  let fixture: ComponentFixture<DesignConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
