import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/errorHandler';

const COMMENTARY = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  description: Joi.string().min(3).required(),
  pokemonName: Joi.string().min(3).required()
});

const validateCommentary = (req: Request, _res: Response, next: NextFunction) => {
  const { username, email, description, pokemonName } = req.body;
  const { error } = COMMENTARY.validate({ username, email, description, pokemonName });
  if (error) {
    const errorWithStatus = new HttpException(400, 'All fields must be correctly filled');
    next(errorWithStatus);
  }
  next();
};

export default validateCommentary;
