import { Component, Input } from '@angular/core';
import { project } from '../../../model/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  @Input() project: project = { id: '', title: '', description: '', status: '', startDate: '', endDate: '', teamSize: 0, image: '' };
}
