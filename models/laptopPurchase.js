const mongoose = require("mongoose");

const laptopPurchaseSchema = new mongoose.Schema({
  Age: { type: Number, required: true }, // int32
  Brand_Purchased: { type: String, required: true }, 
  City: { type: String, required: true },
  Customer_ID: { type: String, required: true, unique: true }, 
  Gender: { type: String, enum: ["Male", "Female", "Other"], required: true }, 
  Income_Level: { type: String, required: true },
  Payment_Mode: { type: String, required: true },
  Price_Range: { type: String, required: true },
  Purchase_Frequency: { type: String, required: true },
  Purchase_Mode: { type: String, required: true },
  Satisfaction_Rating: { type: Number, min: 1, max: 10, required: true } // int32
});

// const LaptopPurchase = mongoose.model("laptop_india_data", laptopPurchaseSchema);

// module.exports = LaptopPurchase;

const LaptopPurchase = mongoose.model("LaptopPurchase", laptopPurchaseSchema, "laptop_india_data");

module.exports = LaptopPurchase;
