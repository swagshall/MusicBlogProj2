const router = require('express').Router();


router.get('/', async (req, res) =>
{ res.render('lyric', {
  layout: 'dashboard',
});
})
  
module.exports = router;
