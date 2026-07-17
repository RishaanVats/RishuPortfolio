import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resume.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./resume.css'],
})
export class ResumeComponent {

}
