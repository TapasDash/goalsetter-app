import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";
import User from "./userModel.js";

class Goal extends Model {}

Goal.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Goal",
    timestamps: true,
  }
);

Goal.belongsTo(User);

export default Goal;
