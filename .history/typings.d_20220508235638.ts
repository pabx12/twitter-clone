export interface Tweet extends TweetBody{
    _id:String,
    _createdAt:String
    _updatedAt:String
    _rev:String
    _type:'tweet'
}
export interface User extends AuthorBody{ 
    _id:String,
    _createdAt:String
    _updatedAt:String
    _rev:String
    _type:'user'
}
export interface  Comment extends CommentBody{
    _id:String,
    _createdAt:String
    _updatedAt:String
    _rev:String
    _type:'comment'
}
export type AuthorBody ={
    name:String,
    slug : String,
    image?:String,
    bio?:Array
}
export type TweetBody = {
    title : String,
    slug : String,
    user?:AuthorBody,
    tweetImage?:String,
    publishedAt?:Date
    relatedComments?:Comment[]
}
export type CommentBody = {
    comment : String,
    user : User,
    commentImage?:String,
    tweet:TweetBody
}