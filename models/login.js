module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("createuser", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    createdAt: {
      filed: "created_at",
      type: Sequelize.DATE,
    },
    updatedAt: {
      filed: "updated_at",
      type: Sequelize.DATE,
    },
  });

  return User;
};
