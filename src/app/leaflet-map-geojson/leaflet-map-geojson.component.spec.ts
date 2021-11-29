import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletMapGeojsonComponent } from './leaflet-map-geojson.component';

describe('LeafletMapGeojsonComponent', () => {
  let component: LeafletMapGeojsonComponent;
  let fixture: ComponentFixture<LeafletMapGeojsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletMapGeojsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletMapGeojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
