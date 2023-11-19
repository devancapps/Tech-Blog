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
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: true,
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



// module.exports = (sequelize, DataTypes) => {
//     const Post = sequelize.define('Post', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         content: {
//             type: DataTypes.TEXT,
//             allowNull: false
//         }
//     }, {
//         timestamps: true,
//         freezeTableName: true
//     });

//     Post.associate = (models) => {
//         // associations can be defined here
//         Post.belongsTo(models.User, {
//             foreignKey: 'user_id',
//             onDelete: 'CASCADE'
//         });
//         Post.hasMany(models.Comment, {
//             foreignKey: 'post_id'
//         });
//     };

//     return Post;
// };
