const express = require('express');
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addLesson,
  deleteLesson,
  updateLesson
} = require('../controllers/courseController');
const { auth, authorize } = require('../middleware/auth');

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Protected routes (Instructor/Admin only)
router.post('/', auth, authorize('instructor', 'admin'), createCourse);
router.put('/:id', auth, authorize('instructor', 'admin'), updateCourse);
router.delete('/:id', auth, authorize('instructor', 'admin'), deleteCourse);
router.post('/:id/lessons', auth, authorize('instructor', 'admin'), addLesson);

// Lesson management routes
router.delete('/:courseId/lessons/:lessonId', auth, authorize('instructor', 'admin'), deleteLesson);
router.put('/:courseId/lessons/:lessonId', auth, authorize('instructor', 'admin'), updateLesson);

module.exports = router;