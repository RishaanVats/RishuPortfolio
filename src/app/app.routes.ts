import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ResumeComponent } from './components/resume/resume';
import { ContactComponent} from './components/contact/contact';
import { CaseStudiesComponent } from './components/case-studies/case-studies'

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];
