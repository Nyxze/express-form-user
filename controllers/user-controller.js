const router = require('express').Router();
const userDAO = require('../models/user-model');
const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
    const data = await userDAO.findAll();
    await res.render('users/list', {users:data});
})

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', async (req, res) =>{

    let userExist = await userDAO.findOneBy('email',req.body.email)
    if(!userExist){

        const pass = await bcrypt.hash(req.body.pass, Math.random());
        let user = {
            user_name: req.body.name,
            email: req.body.email,
            user_password:pass
            
        };
        
        await userDAO.insertOne(user);
        res.redirect('/users')
    }else{
        req.flash('errors','Email used')    
        res.redirect('/users');
    }
})

module.exports = router