import { Subject } from 'rxjs';
import { SamplesService, SampleInterface } from './samples.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  samples: SampleInterface[] = [];

  constructor(private samplesService: SamplesService) { }

  ngOnInit(): void {
    this.samples = this.samplesService.samples;
    this.samplesService.samplesStream.subscribe(
      samples => {
        this.samples = samples;
      }
    );
  }

}
