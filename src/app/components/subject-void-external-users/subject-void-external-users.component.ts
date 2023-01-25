import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, ReplaySubject, Subject, switchMap } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subject-void-external-users',
  styleUrls: ['./subject-void-external-users.component.scss'],
  templateUrl: './subject-void-external-users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectVoidExternalUsersComponent { 
  private _refreshUsersSubject: ReplaySubject<void> = new ReplaySubject<void>(void 0);
  public usersList$: Observable<UserModel[]> = this._refreshUsersSubject
    .asObservable()
    .pipe(switchMap(() => this._userService.getAllUsers()));

  displayedColumns: string[] = ['id', 'email'];
  dataSource = this.usersList$;

  constructor(private _userService: UserService) {
    this._refreshUsersSubject.next();
  }

  onRefreshButtonClicked(){
    this._refreshUsersSubject.next();
  }

}
