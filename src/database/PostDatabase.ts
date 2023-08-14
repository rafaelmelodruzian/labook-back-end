import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_PLAYLISTS = "posts"
    public static TABLE_LIKES_DISLIKES = "likes_dislikes"
}
