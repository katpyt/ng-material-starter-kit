import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserFullModel } from 'src/app/models/user-full.model';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  styleUrls: ['./user-details.component.scss'],
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserDetailsComponent {
  readonly userDetails$: Observable<UserFullModel> = this._activatedRoute.params.pipe(switchMap(data => this._userService.getOneUser(data['id'])));

  

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) {
  }
}
