import {IPost, IComment} from "../interface/Post.ts";

export function generatePosts(): IPost[] {
    const posts: IPost[] = [];

    for (let i = 0; i < 5; i++) {
        const comments: IComment[] = [];

        // Generate 3 comments for each post
        for (let j = 0; j < 3; j++) {
            const comment: IComment = {
                id: j,
                author: {
                    id: j,
                    username: `User ${j}`,
                    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${j}`,
                    email: `10`,
                    createdAt: new Date().toISOString(),
                },
                content: `Comment content ${j}`,
                date: new Date().toISOString(),
            };

            comments.push(comment);
        }

        const post: IPost = {
            id: i,
            title: `Post title ${i}`,
            description: `Post description ${i}`,
            content: `Post content ${i}`,
            avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
            href: `https://example.com/post/${i}`,
            author: `Author ${i}`,
            date: new Date().toISOString(),
            comments: comments,
            likes: Math.floor(Math.random() * 100),
            views: Math.floor(Math.random() * 1000),
            favorites: Math.floor(Math.random() * 100),
            forwards: Math.floor(Math.random() * 100),
        };

        posts.push(post);
    }

    return posts;
}