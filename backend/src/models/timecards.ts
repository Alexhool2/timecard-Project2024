
import { InferSchemaType, model, Schema, Types } from "mongoose";

const timecardSchema = new Schema({
    user: {type: Types.ObjectId,ref:'User',required:true},
    date:{type:Date,required:true}, 
    time_start:{type:Date,required:true},
    time_end:{type:Date,required:true}
})

type TimeCard = InferSchemaType<typeof timecardSchema>

export default model<TimeCard>("TimeCard",timecardSchema)