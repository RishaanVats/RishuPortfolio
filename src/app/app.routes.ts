import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'skills',
    loadComponent: () => import('./components/skills/skills').then((m) => m.SkillsComponent),
  },
  {
    path: 'case-studies',
    loadComponent: () =>
      import('./components/case-studies/case-studies').then((m) => m.CaseStudiesComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects').then((m) => m.ProjectsComponent),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./components/testimonials/testimonials').then((m) => m.TestimonialsComponent),
  },
  {
    path: 'resume',
    loadComponent: () => import('./components/resume/resume').then((m) => m.ResumeComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
