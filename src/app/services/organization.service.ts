import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganizationModel } from '../models/organization.model';
import { OrganizationTeamModel } from '../models/organization-team.model';

@Injectable({ providedIn: 'root' })

export class OrganizationService {
    constructor(private _httpClient: HttpClient) {
    }

    getAllOrganizations(): Observable<OrganizationModel[]> {
        return this._httpClient.get<OrganizationModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/organizations');
    }

    getOrganizationTeams(organizationId: string): Observable<OrganizationTeamModel[]> {
        return this._httpClient.get<OrganizationTeamModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${organizationId}/teams`);
    }


}
