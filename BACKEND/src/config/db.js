import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        // Usar directamente process.env.MONGODB_URI con await
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`Base de datos MongoDB Conectado`);
        return conn;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1);
    }
}