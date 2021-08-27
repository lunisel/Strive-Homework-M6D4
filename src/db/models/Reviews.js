import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Review = sequelize.define(
  "review",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
  },
  { schema: "development" }
);

export default Review;
