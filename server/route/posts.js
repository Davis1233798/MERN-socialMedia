import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This.Work');
});

export default router;