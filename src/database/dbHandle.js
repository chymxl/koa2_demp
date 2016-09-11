import mongoose from 'mongoose';
import models from "./models";

const Schema = mongoose.Schema;

for(let model in models){
    mongoose.model(model, new Schema(models[model]));
}

const _getModel = function(type){
    return mongoose.model(type);
}

export const getModel = (type) => {
    return _getModel(type);
};