import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

export default mongoose.model('Image', imageSchema);
