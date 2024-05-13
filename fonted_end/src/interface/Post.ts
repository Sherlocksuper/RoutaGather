import {IUser} from "./User.ts";

export interface IPost {
    id: number;
    title: string;
    description: string;
    content: string;
    avatar: string;
    href: string;
    author: string;
    date: string;
    comments: IComment[];
    //点赞
    likes: number;
    //浏览
    views: number;
    //收藏
    favorites: number;
    //转发
    forwards: number;
}

export interface IComment {
    id: number;
    author: IUser;
    content: string;
    date: string;
}
