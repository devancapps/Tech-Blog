module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
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
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    Post.associate = (models) => {
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