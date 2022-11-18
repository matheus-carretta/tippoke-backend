import { Router } from 'express';
import CommentaryController from '../controllers/commentary.controller';
import CommentaryService from '../services/commentary.service';
import CommentaryModel from '../models/commentary.model';

const commentaryModel = new CommentaryModel();
const commentaryService = new CommentaryService(commentaryModel);
const commentaryController = new CommentaryController(commentaryService);

const route = Router();

route.post('/', (req, res) => {
  commentaryController.add(req, res);
});

export { route };
