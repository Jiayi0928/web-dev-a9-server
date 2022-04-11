import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    liked: {
        type: Boolean,
        default: false
    },
    disliked: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    handle:{
        type: String,
        default: "elonmusk"
    },
    postedBy: {
        username:{
            type: String,
            default: "Elon Musk"
        }
    },
    time :{
        type: String,
        default: "now"
    },
    avatar_image :{
        type: String,
        default: "https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg"
    },
    stats : {
        comments:{
            type: Number,
            default: 0
        },
        retuits:{
            type: Number,
            default: 0
        },
        likes:{
            type: Number,
            default: 0
        },
        dislikes:{
            type: Number,
            default: 0
        }
    }
}, {collection: 'tuits'});
export default schema;