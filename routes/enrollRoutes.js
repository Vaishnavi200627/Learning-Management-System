const express = require('express');
const router = express.Router();
const {
  enrollStudent,
  getStudentEnrollments,
  getCourseEnrollments,
  updateProgress
} = require('../controllers/enrollController');
const { auth, authorize } = require('../middleware/auth');

router.post('/', auth, enrollStudent);
router.get('/my-enrollments', auth, getStudentEnrollments);
router.get('/course/:id', auth, authorize('instructor', 'admin'), getCourseEnrollments);
router.put('/progress', auth, updateProgress);

module.exports = router;