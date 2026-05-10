"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Tell Vercel this function may take up to 30s (default is 10s on hobby plan).
export const maxDuration = 30;

export type CreateRequestState = {
    success: boolean;
    error?: string;
};

export async function createRequest(
    _prevState: CreateRequestState,
    formData: FormData
): Promise<CreateRequestState> {
    try {
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const company = String(formData.get("company") ?? "").trim();
        const projectAddress = String(formData.get("projectAddress") ?? "").trim();
        const serviceType = String(formData.get("serviceType") ?? "").trim();
        const description = String(formData.get("description") ?? "").trim();

        if (!name || !email || !serviceType || !description) {
            return {
                success: false,
                error: "Name, email, service type, and description are required.",
            };
        }

        await prisma.request.create({
            data: {
                name,
                email,
                phone: phone || null,
                company: company || null,
                projectAddress: projectAddress || null,
                serviceType: serviceType as
                    | "NEW_CONSTRUCTION"
                    | "REMODELING"
                    | "EXTERIOR_ENVELOPE"
                    | "WINDOWS_DOORS_RAILINGS"
                    | "INTERIOR_GLASS"
                    | "SERVICE_MAINTENANCE"
                    | "PRODUCTS",
                description,
            },
        });

        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error: "Something went wrong while submitting your request.",
        };
    }
}
