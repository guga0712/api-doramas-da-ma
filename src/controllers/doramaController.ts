import { Request, Response } from "express";
import prisma from "../models/prismaClient.js";

export const createDorama = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, seriesId, imageUrl, description } = req.body;

    await prisma.dorama.create({
      data: { name, seriesId, imageUrl, description },
    });

    res.status(201).send("Dorama cadastrado");
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar dorama" });
  }
};

export const getDoramas = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const doramas = await prisma.dorama.findMany();
    res.status(200).json(doramas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar doramas" });
  }
};

export const deleteDorama = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);

    await prisma.dorama.delete({
      where: { id },
    });

    res.status(200).json({ message: "Dorama deletado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar dorama" });
  }
};
