const { Router } = require('express');
const router = Router();
const {
    fnGetHome,
    fnPostHome,
    fnPutHome,
    fnDeleteHome,
    fnOthers
} = require('../controllers/home')

router.get('/', fnGetHome);

router.post('/', fnPostHome)
router.post('/:id', fnPostHome);
router.post('/post/:id', fnPostHome)

router.put('/', fnPutHome);

router.delete('/', fnDeleteHome);

router.all('*', fnOthers);

module.exports = router

