export interface OrganizationQueryModel {
  readonly organizationId: string;
  readonly organizationName: string;
  readonly teams: TeamQueryModel[]
}

export interface TeamQueryModel {
  teamName: string;
  usersAvatars: {
    avatarUrl: string;
  }[]
}
