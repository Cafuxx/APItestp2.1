import express from "express";
import morgan from "morgan";
// Routes
import personaRoutes from "./routes/persona.routes";
const app=express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.use("/api/persona", personaRoutes);

export default app;