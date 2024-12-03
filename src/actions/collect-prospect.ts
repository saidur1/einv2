"use server";

import { prismaDB } from "@/lib/db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const collecProspect = async (email: string) => {
  try {
    await prismaDB.prospect.create({
      data: {
        email,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};

export const deleteProspect = async (email: string) => {
  try {
    const result = await prisma.prospect.delete({
      where: {
        email,
      },
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};
