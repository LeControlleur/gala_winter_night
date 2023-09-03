var express = require('express');
var router = express.Router();

var connection = require("../../enregistrement/bd/connection")


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express', host: req.hostname });
});



router.post('/record', function (req, res, next) {

	console.log(req.body.nom)

	connection.query(`INSERT INTO presence_winter_night (nom, prenoms, matricule, telephone, email) VALUES ("${req.body.nom}", "${req.body.prenoms}", "${req.body.matricule}", "${req.body.tel}", "${req.body.email}")`, function (err, result) {
		
		if (err) {
			throw err
		}

		else {
			res.redirect("/")
		}

	})

});

module.exports = router;
