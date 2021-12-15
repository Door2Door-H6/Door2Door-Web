import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GeographicalDataService } from '../../geographical-data.service';

import { LeafletMapGeojsonComponent } from './leaflet-map-geojson.component';

describe('LeafletMapGeojsonComponent', () => {
  let component: LeafletMapGeojsonComponent;
  let fixture: ComponentFixture<LeafletMapGeojsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LeafletMapGeojsonComponent, {
        provide: GeographicalDataService,
        useClass: GeographicalDataService
      }],
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
