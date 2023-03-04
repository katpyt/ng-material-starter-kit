import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job.model';
import { JobTagsModel } from '../models/job-tags.model';
import { JobTagsIdsModel } from '../models/job-tags-ids.model';

@Injectable({ providedIn: 'root' })
export class JobsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<JobModel[]> {
    return this._httpClient.get<JobModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts')
  };

  getAllJobs(): Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts')
  };


  // getTagById(id: string) {
  //   return this._httpClient.get<JobTagsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/'+id)
  //   .pipe(
  //     map( (jobTags) => {
  //       let tagName:string = "";
  //       tagName = jobTags.name;
  //       return tagName;
  //     })
  //   )
  //   ;
  // }

  getTags(): Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/');
  }

  getAllTags(): Observable<JobTagsIdsModel[]> {
    return this._httpClient.get<JobTagsIdsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/');
  }
}
