import { BaseDatabase } from "./BaseDatabase";
import { PostDB } from "../models/Post";

export class PostDatabase extends BaseDatabase {
    public static TABLE_PLAYLISTS = "posts"
    public static TABLE_LIKES_DISLIKES = "likes_dislikes"

    public insertPost = async (
        postDB: PostDB
      ): Promise<void> => {
        await BaseDatabase
          .connection(PostDatabase.TABLE_PLAYLISTS)
          .insert(postDB)
      }

}
