import { Router } from "express";
import { veiculosService } from "../services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosService.getall();
        res.json(veiculos);
    }catch (error) {
    
        console.error (error);
    }
});
veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosService.create(req.body);
         res.status(201).json(veiculos);
    }catch (error) {
        console.error (error);
    }
});
veiculosRouter.put("/:id", async (req, res) => {
    try {
        const veiculos = await veiculosService.update(req.params.id, req.body(id));
        res.json(veiculos);
    }catch (error) {
        console.error (404);
    }
});
veiculosRouter.delete("/:id", async (req, res) => {
    try {
        const veiculos = await veiculosService.delete(req.params.id);
        res.json(veiculos);
    }catch (error) {
        console.error (404);
    }
});
