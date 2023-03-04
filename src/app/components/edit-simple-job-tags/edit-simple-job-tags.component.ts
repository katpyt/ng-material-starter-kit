import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { JobTagsModel } from '../../models/job-tags.model';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-edit-simple-job-tags',
  styleUrls: ['./edit-simple-job-tags.component.scss'],
  templateUrl: './edit-simple-job-tags.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class EditSimpleJobTagsComponent {
  private readonly jobTags$: Observable<JobTagsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._jobTagsService.getJobTags(data['id'])),
    take(1),
    tap((data: JobTagsModel) => this.jobTagsForm.patchValue(data))
  );
  
  readonly jobTagsForm: FormGroup = new FormGroup({ 
    name: new FormControl()
  });

  constructor(private _activatedRoute: ActivatedRoute, private _jobTagsService: JobTagsService, private _router: Router) {
    this.jobTags$.subscribe();
  }

  onJobTagsSubmitted(jobTagsForm: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._jobTagsService.updateJobTags({
        id: data['id'],
        ...jobTagsForm.value
      }))        
      ).subscribe();

  }
}
