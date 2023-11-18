const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

// Use routes
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

// Export API router
module.exports = router;
