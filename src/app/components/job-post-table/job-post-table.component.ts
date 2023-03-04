import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobTagsModel } from '../../models/job-tags.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-post-table',
  styleUrls: ['./job-post-table.component.scss'],
  templateUrl: './job-post-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostTableComponent {
  readonly list$: Observable<JobModel[]> = this._jobsService.getAll();

  readonly tags$: Observable<JobTagsModel[]> = this._jobsService.getTags();

  constructor(private _jobsService: JobsService) {
  }
}
