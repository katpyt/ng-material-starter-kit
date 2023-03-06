import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { UserWithAvatarModel } from '../../models/user-with-avatar.model';
import { OrganizationTeamModel } from '../../models/organization-team.model';
import { OrganizationService } from '../../services/organization.service';
import { UserWithAvatarService } from '../../services/user-with-avatar.service';
import { OrganizationQueryModel, TeamQueryModel } from 'src/app/queries/organization.query-model';

@Component({
  selector: 'app-query-multi-nested-accordion-organizations',
  templateUrl: './query-multi-nested-accordion-organizations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class QueryMultiNestedAccordionOrganizationsComponent {

  readonly organizationList$: Observable<OrganizationQueryModel[]> = combineLatest([
    this._organizationService.getAllOrganizations(),
    this._userWithAvatarService.getAllUsers()
  ]).pipe(
    switchMap(([organizations, users]) =>
      this._organizationService.getOrganizationTeams(organizations.map(org => org.id)
      ).pipe(
        map((teams) =>
          organizations.map((organization) => ({
            organizationId: organization.id,
            organizationName: organization.name,
            teams: this._teamsMap(teams[organization.id], users)
          })
          ))
      ))
  );

  private _teamsMap(teams: OrganizationTeamModel[], users: UserWithAvatarModel[]): TeamQueryModel[] {
    const usersMap = users.reduce((acc, curr) => ({
      ...acc,
      [curr.id]: curr
    }), {} as Record<string, UserWithAvatarModel>);

    return teams.map((team) => ({
      teamName: team.name,
      usersAvatars: team.userIds.map((userId: string) => ({
        avatarUrl: usersMap[userId]?.avatar
      }))
    }));
  }

  constructor(private _organizationService: OrganizationService, private _userWithAvatarService: UserWithAvatarService) {
  }
}
