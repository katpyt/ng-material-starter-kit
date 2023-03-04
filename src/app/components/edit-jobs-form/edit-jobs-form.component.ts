import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { JobTagsIdsModel } from 'src/app/models/job-tags-ids.model';
import { JobTagsModel } from '../../models/job-tags.model';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-edit-jobs-form',
  styleUrls: ['./edit-jobs-form.component.scss'],
  templateUrl: './edit-jobs-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditJobsFormComponent {
  // readonly jobDetailsForm: FormGroup = new FormGroup({
  //   name: new FormControl(),
  //   description: new FormControl(),
  //   jobTags: new FormControl()
  // });
  // readonly details$: Observable<JobTagsModel> = this._activatedRoute.params.pipe(switchMap(data => this._jobTagsService.getOne(data['id'])));

  // readonly jobDetailsForm: FormGroup = new FormGroup({
  //   name: new FormControl(),
  //   description: new FormControl(),
  //   jobTags: new FormControl()
  // });

  // readonly tags$: Observable<JobTagsModel[]> = combineLatest([
  //   this.details$,
  //   this._jobTagsService.getAll()
  // ]).pipe(
  //   tap(([details, list]) => {
  //     list.forEach((tag) => {
  //       (this.jobDetailsForm.get('jobTagIds') as FormGroup).addControl(
  //         tag.id,
  //         new FormControl(details.jobTagIds.includes(+tag.id))
  //       );
  //     });
  //   }),
  //   map(([details, list]) => {
  //     return list;
  //   })
  // );


  // constructor(private _activatedRoute: ActivatedRoute, private _jobTagsService: JobTagsService) {
  //   this.details$.subscribe((data) => {
  //     this.jobDetailsForm.patchValue(data);
  //   });
  // }



  readonly details$: Observable<JobTagsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._jobTagsService.getOne(data['id'])),
    take(1),
    tap((data: JobTagsModel) => this.jobDetailsForm.patchValue(data)),

  );

  readonly tags$: Observable<number[]> = this.details$.pipe(
    map(
      (data: JobTagsModel) => data['jobTagIds']
    ));

  readonly jobDetailsForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    jobTags: new FormControl()
  });

  constructor(private _activatedRoute: ActivatedRoute, private _jobTagsService: JobTagsService) {
    this.details$.subscribe();
    this.tags$.subscribe();
  }

  onJobDetailsSubmitted(jobDetails: FormGroup): void {
  }

  ngOnInit(): any {

  }
}
