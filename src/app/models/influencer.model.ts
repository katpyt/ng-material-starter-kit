import { FollowerModel } from "./follower.model";

export interface InfluencerModel {
  readonly name: string;
  readonly avatar: string;
  readonly followedBy: FollowerModel[]
}

