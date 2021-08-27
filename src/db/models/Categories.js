import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Category = sequelize.define(
  "category",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false, schema: "development" }
);

export default Category;
