import mongoose from 'mongoose' // mongoose.org/docs

let VoteSchema = new mongoose.Schema({
  showId: { type: Number, required: true, unique: true },
  count: { type: Number, default: 0 }
})

// objeto con el modelo y métdos para manipularlo
export default mongoose.model('Vote', VoteSchema) 