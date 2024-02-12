import Image from '../models/image.js';

export const getAllImages = async (req, res, next) => {
  try {
    const images = await Image.find();
    if (!images.length) {
      throw { statusCode: 404, message: 'Image not found' };
    }
    res.json(images);
  } catch (error) {
    next(error);
  }
};

export const uploadImage = async (req, res, next) => {
  try {
    const imageUrl = req.file.path;
    await Image.create({ url: imageUrl });
    res.json({ statusCode: 201, message: 'Image successfully uploaded' });
  } catch (error) {
    next(error);
  }
};
