import { JobTagsModel } from "./job-tags.model";


export interface JobResponseModel {
  readonly title: string;
  readonly description: string;
  readonly jobTagIds: JobTagsModel[];

}
