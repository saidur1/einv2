"use server";

import { prismaDB } from "@/lib/db";

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
