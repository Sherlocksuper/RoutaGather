import {generatePosts} from "../data/posts.ts";


export const getPosts = async () => {
    return generatePosts()
};