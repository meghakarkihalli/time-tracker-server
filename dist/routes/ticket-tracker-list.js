const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
    res.status(200).json({ msg: "Work in progress" });
});
module.exports = router;
