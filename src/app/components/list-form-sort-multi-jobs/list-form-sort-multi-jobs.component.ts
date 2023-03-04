import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, of, startWith } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-list-form-sort-multi-jobs',
  styleUrls: ['./list-form-sort-multi-jobs.component.scss'],
  templateUrl: './list-form-sort-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ListFormSortMultiJobsComponent {
  readonly orderPropertyDictionary: Observable<string[]> = of(['title', 'description'])
  readonly orderDirectionDictionary: Observable<string[]> = of(['asc', 'desc'])

  readonly sortForm: FormGroup = new FormGroup({
    orderProperty: new FormControl(),
    orderDirectionProperty: new FormControl()
  });

  // readonly orderProperty: FormControl = new FormControl();
  // readonly orderDirectionProperty: FormControl = new FormControl();
  onFormGroupSubmitted(formGroup: FormGroup): void {
  }

  readonly jobsList$: Observable<JobModel[]> = combineLatest([
    this._jobsService.getAll(),
    // this.orderProperty.valueChanges.pipe(startWith('')),
    // this.orderDirectionProperty.valueChanges.pipe(startWith(''))
    this.sortForm.valueChanges.pipe(startWith({ orderPropery: '', orderDirectionProperty: '' }))
  ]).pipe(
    map(([list, form]: [JobModel[], { orderProperty: string, orderDirectionProperty: string }]) => {
      if (!form.orderProperty || !form.orderDirectionProperty) return [];

      return list.sort((a: Record<string, any>, b: Record<string, any>) => {
        return form.orderDirectionProperty === 'asc'
          ? a[form.orderProperty].toLowerCase() > b[form.orderProperty].toLowerCase() ? 1 : -1
          : a[form.orderProperty].toLowerCase() > b[form.orderProperty].toLowerCase() ? -1 : 1
      })
    })
  );


  constructor(private _jobsService: JobsService) {
  }
}
