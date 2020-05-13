const router = require('express').Router();
const {cohorts} = require('./cohorts');
const { getCohortData } = require('./getCohortData');
const { getStudent } = require('./student');
const { getProject } = require('./getProject');
const { getAllStudents } = require('./allStudents');
const { cohortsByCity} = require('./getCohortsByCity');
const { getCohortstudent } = require('./getCohortstudents');
const { getMentorData } = require('./getMentorData');
const { getCohortProjects } = require('./getCohortProjects');

router.get('/api/cohortinfo/:cohortID', getCohortData);
router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/project/:id', getProject);
router.get('/api/cohorts/:city', cohortsByCity);
router.get('/api/cohorts/projects/:city', cohorts);

router.get('/api/cohortstd/:cohortID', getCohortstudent);
router.get('/api/cohortMentor/:cohortID', getMentorData);
router.get('/api/cohortProjects/:cohortID', getCohortProjects);
module.exports = router;












