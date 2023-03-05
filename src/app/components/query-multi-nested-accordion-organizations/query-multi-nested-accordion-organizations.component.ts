import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, elementAt, forkJoin, map, Observable, reduce, share, shareReplay, switchMap } from 'rxjs';
import { OrganizationModel } from '../../models/organization.model';
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
  readonly userWithAvatarList$: Observable<UserWithAvatarModel[]> = this._userWithAvatarService.getAllUsers().pipe(shareReplay(1));

  readonly organizationList$: Observable<OrganizationQueryModel[]> = this._organizationService.getAllOrganizations().pipe(
    shareReplay(1),
    switchMap((organizations) =>
      forkJoin(organizations.map((organization) =>
        this._organizationService.getOrganizationTeams(organization.id).pipe(shareReplay(1)),
        // this.userWithAvatarList$
      )).pipe(
        map((teams: OrganizationTeamModel[][]) =>
          organizations.map((element, index) => {
            console.log(teams[index]);

            const teamsArray: TeamQueryModel[] = [];

            teams[index].forEach(team => {
              console.log(team.name);
              const teamDetails: TeamQueryModel = {
                teamName: team.name,
                usersAvatars:
                  // jak stworzyć listę adresów avatarów, zeby nie była to w modelu Observable tylko tablica ????

                  this.userWithAvatarList$
                    .pipe(
                      map(usersWithAvatar => {
                        console.log(team.userIds);
                        return usersWithAvatar.filter((userWithAvatar) => team.userIds.includes(userWithAvatar.id.toLowerCase()))//.reduce((a, b) => { return a.concat(b.avatar) }, '')
                      })
                    )
              }
              teamsArray.push(teamDetails);
            })

            return {
              organizationId: element.id,
              organizationName: element.name,
              teams: teamsArray
              // {
              //   teamName: teams[index],
              //   usersAvatars: []
              // }

              // const userIdsInTeam: string[] = [];
              // teams[index].forEach(team => {
              //   team.userIds.forEach(userId =>
              //     userIdsInTeam.push(userId)
              //   )
              // });
              // console.log("userIdsInTeam: " + userIdsInTeam);

              // const userIdsInTeamstring: string = userIdsInTeam.toString();
              // const usersWithAvatars = this._userWithAvatarService.getAllUsers().pipe(
              //   shareReplay(1),
              //   switchMap((users) => {
              //     // console.log(teamUsersIds);
              //     return users.filter((user) => userIdsInTeam.includes(user.id.toLowerCase()))
              //   })
              // );
              // console.log("usersWithAvatars [" + usersWithAvatars + "]");
              // //   .pipe(
              // //   map(users => users.reduce((a, b) => { return a.concat(b.avatar) }, ''))
              // // );
              // // ).pipe(
              // //   switchMap(users => users.reduce((a, b) => a + b, {})
              // //   ));
              // const a: string[] = [];
              // usersWithAvatars.forEach(user => {
              //   a.push(user.avatar);
              //   // return console.log(avatar)
              // });
              // console.log("a [" + a + "]");




            }
          })
        )
      )
    )
  );

  // readonly organizationList$: Observable<OrganizationQueryModel[]> = this._organizationService.getAllOrganizations().pipe(
  //   switchMap((organizations) =>
  //     forkJoin(organizations.map((organization) =>
  //       this._organizationService.getOrganizationTeams(organization.id),
  //       this._userWithAvatarService.getAllUsers()
  //     )).pipe(
  //       map((teams: OrganizationTeamModel[][]) =>
  //         organizations.map((element, index) => {
  //           return {
  //             organizationId: element.id,
  //             organizationName: element.name,
  //             teamName: teams[index][0].name,
  //             userAvatar: 
  //           }
  //         })
  //       )
  //     )
  //   )
  // );

  constructor(private _organizationService: OrganizationService, private _userWithAvatarService: UserWithAvatarService) {
  }
}
