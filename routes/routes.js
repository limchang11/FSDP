const express=require('express');

const router =express.Router();

router.get('/',(req,res)=>{
    res.render('index')
});

router.get('/register',(req,res)=>{
    res.render('register')
});
router.get('/login',(req,res)=>{
    res.render('login')
});
router.get('/feedback',(req,res)=>{
    res.render('feedback')
});
router.get('/products',(req,res)=>{
    res.render('products')
});
router.get('/cart',(req,res)=>{
    res.render('cart')
});
router.get("/profile",		async function(req, res){
	console.log("Profile page accessed");
	return res.render('profile',{
		title: "Profile"
	});
});

module.exports= router;