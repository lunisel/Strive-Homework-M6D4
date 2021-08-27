import Product from "./Products.js";
import Review from "./Reviews.js";
import sequelize from "../index.js";
import Category from "./Categories.js";
import User from "./Users.js";

Review.belongsTo(Product);
Product.hasMany(Review);

Product.belongsTo(Category);
Category.hasMany(Product);

Review.belongsTo(User);
User.hasMany(Review);

export default { Product, sequelize, Review, Category, User };
