import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoScreenComponent } from './nuevo-screen.component';

describe('NuevoScreenComponent', () => {
  let component: NuevoScreenComponent;
  let fixture: ComponentFixture<NuevoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoScreenComponent]
    });
    fixture = TestBed.createComponent(NuevoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
