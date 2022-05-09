export interface Tweet extends TweetBody{
    _id:String,
    _createdAt:String
    _updatedAt:String
    _rev:String
    _type:'tweet'
}
export interface User extends UserBody{ 
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
export type UserBody ={
    name:String,
    image?:String,
}
export type TweetBody = {
    title : String,
    slug : String,
    user?:UserBody,
    tweetImage?:String,
    publishedAt?:Date
    relatedComments?:Comment[]
}
export type CommentBody = {
    comment : String,
    user : UserBody,
    commentImage?:String,
    tweet:Tweet
}