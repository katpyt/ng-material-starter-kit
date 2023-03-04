import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-route-multi-jobs',
  styleUrls: ['./search-route-multi-jobs.component.scss'],
  templateUrl: './search-route-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchRouteMultiJobsComponent {
  readonly searchForm: FormGroup = new FormGroup({
    searchParam: new FormControl('')
  });

  readonly queryParams$: Observable<Params> = this._activatedRoute.queryParams.pipe(
    map(data => ({ search: data['search'] }))
  );

  readonly jobsList$: Observable<JobModel[]> = combineLatest([
    this._jobsService.getAll(),
    this.queryParams$
    // ]).pipe(
    //   map(([list, queryParams]) => {
    //     return list.filter((job) => {
    //       return queryParams['search'] !== ''
    //         ?
    //         job.description?.toLowerCase().includes(queryParams['search'])
    //         || job.title?.toLowerCase().includes(queryParams['search'])
    //         || job.tags?.toLowerCase().includes(queryParams['search'])
    //         : true
    //     })
    //   })
    // );
    //alternatynie przez object.values
  ]).pipe(
    map(([list, queryParams]) => {
      return list.filter((job) => {
        return queryParams['search'] !== ''
          ? Object.values(job).toString().toLowerCase().includes(queryParams['search'])
          : true
      })
    })
  );

  onSearchFormSubmitted(searchForm: FormGroup): void {
    this._router.navigate(
      [],
      { queryParams: { search: searchForm.get('searchParam')?.value } }
    )
  }

  constructor(private _jobsService: JobsService, private _activatedRoute: ActivatedRoute, private _router: Router, private _location: Location) {
  }
}
