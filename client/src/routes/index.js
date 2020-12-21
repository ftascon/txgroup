import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Index from '../pages/index/index'

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComponent = renderToString(<Index />);
    res.status(200).render('pages/index/index', { reactApp: reactComponent });
})
export default router;
