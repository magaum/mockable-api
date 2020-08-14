/**
 * 
 * @fileoverview Entidade Usuario
 * 
 */

const mongoose = require("mongoose");
const COLLECTION = "usuarios";
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date },
    isDeleted: { type: Boolean, default: false },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model(COLLECTION, usuarioSchema);
