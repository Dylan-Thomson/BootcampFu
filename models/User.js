module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastLogin: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = models => {
    User.hasMany(models.Question, {
      onDelete: "cascade"
    });
    User.hasMany(models.Answer, {
      onDelete: "cascade"
    });
    User.hasMany(models.QuestionUpvotes, {
      onDelete: "cascade"
    });
    User.hasMany(models.QuestionDownvotes, {
      onDelete: "cascade"
    });
  };

  return User;
};
