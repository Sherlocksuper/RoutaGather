import {IPost} from "./Post.ts";

export interface IUser {
    id: number;
    username: string;
    email: string;
    avatar: string;
    role?: string;
    createdAt: string;
    posts?: IPost[];
    //被点赞、收藏、关注
    receivedLikes?: number;
    receivedFavorites?: number;
    followers?: number;
    //点赞、收藏、关注
    likedPosts?: IPost[];
    collectionPosts?: IPost[];
    followingUsers?: IUser[];
}