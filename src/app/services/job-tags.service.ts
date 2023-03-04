import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagsModel } from '../models/job-tags.model';

@Injectable({ providedIn: 'root' })


export class JobTagsService {
  constructor(private _httpClient: HttpClient) {
  }

  getJobTags(id: string): Observable<JobTagsModel> {
    return this._httpClient.get<JobTagsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  updateJobTags(jobtags: JobTagsModel): Observable<JobTagsModel> {
    return this._httpClient.put<JobTagsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + jobtags.id, jobtags);
  }

  getOne(id: string): Observable<JobTagsModel> {
    return this._httpClient.get<JobTagsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  getAll(): Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/');
  }
}
