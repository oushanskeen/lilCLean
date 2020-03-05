const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const helloSchema = new Schema(
    {
        content:{type: String,required: true},
        //description:{type: String,required: true},
        //duration:{type: Number,required: true},
        //date:{type: Date,required: true}
    },
    //{
    //    timestamps: true
    //}
);

const Hello = mongoose.model('Hello', helloSchema);

module.exports = Hello;
