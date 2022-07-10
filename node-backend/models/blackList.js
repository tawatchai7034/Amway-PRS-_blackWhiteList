const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BlackWhiteList = new Schema({
  guidKey: { type: String },
  sku: { type: String },
  receiveNo:{type:String},
  serialNoNew: { type: String },
  serialNoOld: { type: String },
  type:{type:String},
  recordDate: { type: Date },
  guidKeyWarranty: { type: String },
  status:{type:String},
  createDate: { type: Date },
  createBy: { type: String },
  updateDate:{type: Date},
  updateBy: { type: String }
},{collection:'blackWhiteList'});

module.exports = mongoose.model('BlackWhiteList',BlackWhiteList);