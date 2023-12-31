module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
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
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        hooks: async (user) => {
            user.password = await bcrypt.hash(user.password, 8);
        }
    });

    User.prototype.checkPassword = function(password) {
        return bcrypt.compare(password, this.password);
    }

    User.associate = (models) => {
        User.hasMany(models.Post, {
            foreignKey: 'user_id'
        });
        User.hasMany(models.Comment, {
            foreignKey: 'user_id'
        });
    };

    return User;
};
