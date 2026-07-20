import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './case-studies.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./case-studies.css'],
})
export class CaseStudiesComponent {

}
