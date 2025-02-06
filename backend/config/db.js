import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:tanya1108@food-delivery-platform.hd0op.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}