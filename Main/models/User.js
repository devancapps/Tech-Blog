module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      }
  }, {
      timestamps: true,
      freezeTableName: true
  });

  User.associate = (models) => {
      // associations can be defined here
      User.hasMany(models.Post, {
          foreignKey: 'user_id'
      });
      User.hasMany(models.Comment, {
          foreignKey: 'user_id'
      });
  };

  return User;
};
