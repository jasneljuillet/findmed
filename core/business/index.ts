import { Request, Response } from 'express';

import Business from '../models/Business';

const getBusiness = async(res: Response) => {
    await Business.find({}).exec( (err, saving) => {
        if(err) res.send(err)
        res.send(saving)
    })
}

const create = async(req: Request, res: Response) => {
   new Business(req.body).save((err, saving) => {
        if (err) res.send(err);
        res.send({ success: true });
    })
}

export default {
    get: getBusiness,
    post: create,
}