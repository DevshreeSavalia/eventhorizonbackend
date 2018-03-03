var express = require('express');
var router = express.Router();
var event_q = require('../models/event_q_model');
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        event_q.getEventByCommunityId(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
module.exports = router;