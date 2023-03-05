import { Observable } from "rxjs";
import { OrganizationTeamModel } from "../models/organization-team.model";
import { UserWithAvatarModel } from "../models/user-with-avatar.model";

export interface OrganizationQueryModel {
  readonly organizationId: string;
  readonly organizationName: string;
  readonly teams: TeamQueryModel[]

  // } OrganizationTeamModel[];
  // // readonly userName: string;
  // readonly userAvatar: string[];
}


export interface TeamQueryModel {
  teamName: string;
  usersAvatars: Observable<UserWithAvatarModel[]>
}
