const router = require('express').Router();
const payerRoutes = require('./payer-routes');
const pointsRoutes = require('./points-routes');

router.use('/payers', payerRoutes);
router.use('/points', pointsRoutes)

module.exports = router;