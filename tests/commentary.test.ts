import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon, { SinonStub } from 'sinon'
import app from '../src/app'
import CommentaryModel from '../src/models/commentary.model'
import { newCommentaryPayload, newCommentaryResponse } from './commentaryMock';

chai.use(chaiHttp)

describe('Commentary API Test', () => {
  describe('POST commentary', () => {

    before(() => {
      sinon.stub(CommentaryModel.prototype, 'add').resolves(newCommentaryResponse as any);
    });
    
    after(() => {
      (CommentaryModel.prototype.add as SinonStub).restore();
    })

    it('should return status 201 and a new commentary json', async () => {
      const response = await chai.request(app).post('/commentary').send(newCommentaryPayload)

      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal(newCommentaryResponse);
    });

    it('should return error 400 with incorrect payload and a message', async () => {
      const response = await chai.request(app).post('/commentary').send(newCommentaryPayload.pokemonName);

      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({"message":"All fields must be correctly filled"});
    });
  });
});
