'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const {Students, Campuses} = require('../db/models/models.js')


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
//apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

apiRouter.get('/students', (req, res, next) => {
	Students.findAll({include: [Campuses]})
	.then(result => res.json(result))
	.catch(next);
} );

apiRouter.post('/students', (req, res, next) => {
	Students.create(req.body)
	.then(student => res.json(student))
	.catch(next);
});

// apiRouter.param('studentId',function(req, res, next, studentId){
// 	Students.findById(studentId)
// 	.then(student => {
// 		if(!student) {
// 			const err = new Error('No such Student');
// 			err.status = 404;
// 			throw err;
// 		} else {
// 			req.student = student;
// 		}
// 	})
// 	.catch(next);
// })

apiRouter.put('/students/:studentId', (req, res, next) => {
	//console.log("hello", req.body, req.params); Not working as planned. 
	Students.update(req.body, {where: {id: req.params.studentId}, returning: true})
	.then(result => res.json(result))
	.catch(next);
});

apiRouter.delete('/students/:studentId', (req, res, next) => {
	Students.destroy({where: {id: req.params.studentId}})
	.then(result => res.json(result))
	.catch(next);
});

apiRouter.get('/students/:studentId', (req, res, next) => {
	Students.findOne({ where: {id: req.params.studentId}, include: [Campuses]})
	.then( result => { 
		if(!result) {
			const err = Error('Students not found');
			err.status = 404;
			throw err;
		} else {
			res.json(result);
		}
	})
	.catch(next);
} );

apiRouter.get('/campuses', (req, res, next) => {
	Campuses.findAll()
	.then(result => res.json(result))
	.catch(next);
} );

apiRouter.post('/campuses', (req, res, next) => {
	Campuses.create(req.body)
	.then(campus=> res.json(campus))
	.catch(next);
});

apiRouter.delete('/students/:campusId', (req, res, next) => {
	Students.destroy({where: {id: req.params.campusId}})
	.then(result => res.json(result))
	.catch(next);
});

apiRouter.get('/campuses/:campusId', (req, res, next) => {

	Students.findAll({ include: [{ model: Campuses ,where: {id: req.params.campusId}}]})
	.then(result => { 
		if(!result) {
			const err = Error('No Students found for this Campus');
			err.status = 404;
			throw err;
		} else
			res.json(result);
	})
	.catch(next);
	

} );

module.exports = apiRouter;