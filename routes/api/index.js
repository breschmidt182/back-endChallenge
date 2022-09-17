const router = require('express').Router();
const payerRoutes = require('../../controllers/payers');
const pointsRoutes = require('../../controllers/points');

router.use('/payers', payerRoutes);
router.use('/points', pointsRoutes)

module.exports = router;