"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const collecProspect = async (email: string) => {
  try {
    await prisma.prospect.upsert({
      where: {
        email: email,
      },
      create: {
        email,
      },
      update: {
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
