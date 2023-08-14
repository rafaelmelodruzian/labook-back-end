import { BaseDatabase } from "./BaseDatabase";
import { PostDB, PostDBWithCreatorName } from "../models/Post";
import { UserDatabase } from "./UserDatabase";

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


      public getPostsWithCreatorName =
      async (): Promise<PostDBWithCreatorName[]> => {
  
      const result = await BaseDatabase
        .connection(PostDatabase.TABLE_PLAYLISTS)
        .select(
          `${PostDatabase.TABLE_PLAYLISTS}.id`,
          `${PostDatabase.TABLE_PLAYLISTS}.creator_id`,
          `${PostDatabase.TABLE_PLAYLISTS}.content`,
          `${PostDatabase.TABLE_PLAYLISTS}.likes`,
          `${PostDatabase.TABLE_PLAYLISTS}.dislikes`,
          `${PostDatabase.TABLE_PLAYLISTS}.created_at`,
          `${PostDatabase.TABLE_PLAYLISTS}.updated_at`,
          `${UserDatabase.TABLE_USERS}.name as creator_name`
        )
        .join(
          `${UserDatabase.TABLE_USERS}`,
          `${PostDatabase.TABLE_PLAYLISTS}.creator_id`, 
          "=",
          `${UserDatabase.TABLE_USERS}.id`
        )
      
      return result as PostDBWithCreatorName[]
    }


    public findPostById = async (
        id: string
      ): Promise<PostDB | undefined> => {
        const [result] = await BaseDatabase
          .connection(PostDatabase.TABLE_PLAYLISTS)
          .select()
          .where({ id })
    
        return result as PostDB | undefined
      }
    
      public updatePost = async (
        postDB: PostDB
      ): Promise<void> => {
        await BaseDatabase
          .connection(PostDatabase.TABLE_PLAYLISTS)
          .update(postDB)
          .where({ id: postDB.id })
      }


      public deletePostById = async (
        id: string
      ): Promise<void> => {
        await BaseDatabase
          .connection(PostDatabase.TABLE_PLAYLISTS)
          .delete()
          .where({ id })
      }


      
}
