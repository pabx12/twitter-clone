export type Author ={
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
export type Comment = {
    comment : String,
    username : Author,
    commentImage?:String,
    tweet:TweetBody
}