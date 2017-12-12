'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const {Students, Campuses} = require('../db/models/models.js')


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

apiRouter.get('/students', (req, res, next) => {
	Students.findAll()
	.then(result => res.json(result))
	.catch(next);
} );

apiRouter.get('/students/:studentId', (req, res, next) => {
	Students.findById(req.params.studentId)
	.then( result => { 
		if(!result) {
			const err = Error('Students not found');
			err.status = 404;
			throw err;
		} else
			res.json(result);
	})
	.catch(next);
} );

apiRouter.get('/campuses', (req, res, next) => {
	Campuses.findAll()
	.then(result => res.json(result))
	.catch(next);
} );

apiRouter.get('/campuses/:campusId', (req, res, next) => {

	Students.findAll({ include: [{ model: Campuses ,where: {id: req.params.campusId}}]})
	.then(result => { 
		if(!result) {
			const err = Error('No Students found for this Campus');
			err.status = 404;
			throw err;
		} else
			//console.log(result);
			res.json(result);
	})
	.catch(next);
	

} );

module.exports = apiRouter;