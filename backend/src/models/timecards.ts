
import { InferSchemaType, model, Schema, Types } from "mongoose";

const timecardSchema = new Schema({
    user: {type: Types.ObjectId,ref:'User',required:true},
    date:{type:Date, default:new Date()}, 
    time_start:{type:Date, default:null},
    time_end:{type:Date, default:null},
    status:{type:String,
        enum:['present','absent'],
        required:true,
        default:'absent'
    }
})

type TimeCard = InferSchemaType<typeof timecardSchema>

export default model<TimeCard>("TimeCard",timecardSchema)