import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserWithAvatarModel } from '../../models/user-with-avatar.model';
import { UserWithAvatarService } from '../../services/user-with-avatar.service';

@Component({
  selector: 'app-subject-model-in-memory-user',
  styleUrls: ['./subject-model-in-memory-user.component.scss'],
  templateUrl: './subject-model-in-memory-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectModelInMemoryUserComponent {
  private _userListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public userList$: Observable<UserWithAvatarModel[]> = this._userListSubject.asObservable().pipe(switchMap(() => this._userWithAvatarService.getAllUsers()));
  private _userDetailsSubject: ReplaySubject<UserWithAvatarModel> = new ReplaySubject<UserWithAvatarModel>();
  public userDetails$: Observable<UserWithAvatarModel> = this._userDetailsSubject.asObservable();

  constructor(private _userWithAvatarService: UserWithAvatarService) {
  }

  onNameClicked(user: UserWithAvatarModel) {
    this._userDetailsSubject.next(user);
  }

  onCancelClicked(){
    this._userDetailsSubject.next(undefined as any);
  }
}
