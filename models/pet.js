"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};





const PetSchema = new Schema({
    name            : { type: String, required: true }
  , species         : { type: String }
  , birthday        : { type: Date }
  , picUrl          : { type: String }
  , picUrlSq        : { type: String }
  , avatarUrl: { type: String, required: true }
  , favoriteFood    : { type: String }
  , description     : { type: String }
  , price           : {type: Number, required: true }
},
{
  timestamps: true
});

PetSchema.plugin(mongoosePaginate);

PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' });

module.exports = mongoose.model('Pet', PetSchema);
