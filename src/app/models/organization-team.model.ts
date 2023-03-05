export interface OrganizationTeamModel {
  readonly id: string;
  readonly organizationId: string;
  readonly name: string;
  readonly userIds: string[];
}
