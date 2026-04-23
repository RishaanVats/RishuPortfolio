import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  constructor() {}

  projects = [
    {
      id: 1,
      title: 'Cube Frontend Assignment',
      category: 'Web UI',
      description:
        'An accessible, responsive e-commerce UI built from scratch using semantic HTML, custom CSS, and vanilla JavaScript, with a deliberate focus on accessibility beyond stated requirements.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      techStack: ['HTML5', 'JavaScript', 'CSS'],
      links: {
        live: 'https://cubetechassignment.web.app/',
        code: 'https://github.com/RishaanVats/CubeHTMLAssignment',
      },
    },
    {
      id: 2,
      title: 'Sudarshan - Analytics Dashboard',
      category: 'Analytics Dashboard',
      description:
        'An accessible, responsive Sudarshan, a campaign intelligence dashboard that monitors field operations, analyzes voter outreach data, and provides actionable insights through a modular Angular-based analytics interface.',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      techStack: ['Angular 21', 'Bootstrap', 'HTML', 'CSS'],
      links: {
        live: 'https://sudarshandashboard.vercel.app/dashboard',
        code: 'https://github.com/RishaanVats/Sudarshan',
      },
    },
  ];
}
