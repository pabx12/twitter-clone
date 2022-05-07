export interface Tweet extends TweetBody{
    _id:String,
    _createdAt:String
    _updatedAt:String
    _rev:String
    _type:'tweet'
}
export interface Author extends AuthorBody{ 
    _id:String,
    _createdAt:String
    _updatedAt:String
    _rev:String
    _type:'author'
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
    username:Author,
    tweetImage?:String,
    publishedAt?:Date
}
export type CommentBody = {
    comment : String,
    username : Author,
    commentImage?:String,
    tweet:TweetBody
}