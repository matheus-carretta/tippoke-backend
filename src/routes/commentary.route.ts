import { Router } from 'express';
import CommentaryController from '../controllers/commentary.controller';
import CommentaryService from '../services/commentary.service';
import CommentaryModel from '../models/commentary.model';
import validateCommentary from '../middlewares/validator.middleware';

const commentaryModel = new CommentaryModel();
const commentaryService = new CommentaryService(commentaryModel);
const commentaryController = new CommentaryController(commentaryService);

const route = Router();

route.post('/', validateCommentary, (req, res) => {
  commentaryController.add(req, res);
});

route.get('/', (req, res) => {
  commentaryController.get(req, res);
})

export { route };
