import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { project } from '../../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsList: project[] = []

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: (result: project[]) => this.projectsList = result,
      error: (error) => console.log(error)
    });
  }
}
