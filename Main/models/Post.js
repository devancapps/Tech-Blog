module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });

    Post.associate = (models) => {
        // associations can be defined here
        Post.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
        Post.hasMany(models.Comment, {
            foreignKey: 'post_id'
        });
    };

    return Post;
};
