const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("social_network", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
          primaryKey: true,
      autoIncrement: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM(["male", "female"]),
      allowNull: true,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

(async () => {
  try {
    await User.sync({
      alert: true,
      force: false,
    });
      
  } catch (error) {
    console.error(error);
  }
})();

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "posts",
    timestamps: false,
  }
);

(async () => {
  try {
    await Post.sync({
      alert: true,
      force: false,
    });
      
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
    try {
      await Post.sync({
        alert: true,
        force: false,
      });
        
      const users = await User.findByPk(3)
      users.destroy()
      
        
    } catch (error) {
      console.error(error);
    }
  })();


