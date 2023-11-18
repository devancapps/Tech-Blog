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
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });

    Comment.associate = (models) => {
        // associations can be defined here
        Comment.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
        Comment.belongsTo(models.Post, {
            foreignKey: 'post_id',
            onDelete: 'CASCADE'
        });
    };

    return Comment;
};
