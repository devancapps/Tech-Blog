module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, {
            foreignKey: 'post_id'
        });
        Comment.belongsTo(models.User, {
            foreignKey: 'user_id'
        });
    };

    return Comment;
};
