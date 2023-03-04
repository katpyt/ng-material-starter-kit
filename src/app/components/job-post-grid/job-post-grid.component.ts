import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobTagsModel } from 'src/app/models/job-tags.model';
import { JobResponseModel } from 'src/app/models/JobResponseModel';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';
import { JobPostTableComponentModule } from '../job-post-table/job-post-table.component-module';

@Component({
  selector: 'app-job-post-grid',
  styleUrls: ['./job-post-grid.component.scss'],
  templateUrl: './job-post-grid.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostGridComponent {
  readonly list$: Observable<JobModel[]> = this._jobsService.getAll();

  readonly tagList$: Observable<JobTagsModel[]> = this._jobsService.getTags();

  constructor(private _jobsService: JobsService) {
  }
}
