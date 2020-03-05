const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gallerySchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            //unique: true,
            //trim: true,
            //minlength: 3
        },
        content:{type:[],required:true,}
    },
    //{
    //    timestamps: true
    //}
);

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
