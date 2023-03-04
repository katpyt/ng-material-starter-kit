import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-university-radio-list',
  styleUrls: ['./university-radio-list.component.scss'],
  templateUrl: './university-radio-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityRadioListComponent {
  readonly polishUniversities$: Observable<UniversityModel[]> = this._universityService.getAllPolishUniversities();
  readonly universityControl = new FormControl('', [Validators.required]);

  constructor(private _universityService: UniversityService) {
  }
}
