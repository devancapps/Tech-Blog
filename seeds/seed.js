const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Bulk create Users
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Bulk create Posts
    const posts = await Post.bulkCreate(postData.map(post => {
        return {
            ...post,
            userId: users[Math.floor(Math.random() * users.length)].id
        };
    }));

    // Bulk create Comments
    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            userId: users[Math.floor(Math.random() * users.length)].id,
            postId: posts[Math.floor(Math.random() * posts.length)].id
        });
    }

    process.exit(0);
};

seedDatabase();
