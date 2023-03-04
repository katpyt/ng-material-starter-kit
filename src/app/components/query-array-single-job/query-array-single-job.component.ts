import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobTagsModel } from '../../models/job-tags.model';
import { JobsService } from '../../services/jobs.service';
import { JobTagsQueryModel } from 'src/app/queries/job-tags.query-model';
import { JobTagsIdsModel } from 'src/app/models/job-tags-ids.model';

@Component({
  selector: 'app-query-array-single-job',
  templateUrl: './query-array-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QueryArraySingleJobComponent {

  readonly jobList$: Observable<JobTagsQueryModel[]> = combineLatest([
    this._jobsService.getAllJobs(),
    this._jobsService.getAllTags()
  ]).pipe(map(([jobs, tags]) => {
    const jobTagsMap: Record<string, JobTagsIdsModel> = tags.reduce((a, b) => ({ ...a, [b.id]: b }), {});

    return jobs.map((job) => ({
      jobTitle: job.title,
      jobTags: job.jobTagIds.map(tag => jobTagsMap[tag].name)
    }))
  }));

  constructor(private _jobsService: JobsService) {
  }
}
