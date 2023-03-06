import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { OrganizationModel } from '../models/organization.model';
import { OrganizationTeamModel } from '../models/organization-team.model';

@Injectable({ providedIn: 'root' })

export class OrganizationService {
    constructor(private _httpClient: HttpClient) {
    }

    getAllOrganizations(): Observable<OrganizationModel[]> {
        return this._httpClient.get<OrganizationModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/organizations');
    }

    getOrganizationTeams(organizationIds: string[]): Observable<Record<string, OrganizationTeamModel[]>> {
        return forkJoin(
            (organizationIds.map((orgId) =>
                this._httpClient.get<OrganizationTeamModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${orgId}/teams`))
            )
        ).pipe(
            map((teams: OrganizationModel[][]) =>
                teams.reduce((acc, curr, idx) => ({ ...acc, [organizationIds[idx]]: curr }), {})
            )
        );
    }
}
