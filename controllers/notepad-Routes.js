const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) =>
   { res.render('notes', {
        layout: 'notepad',
      });


  })
  
module.exports = router;
  