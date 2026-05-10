"use server";

import { prisma, dbDebugInfo } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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
        const msg = error instanceof Error ? error.message : String(error);
        console.error("[createRequest error]", msg, "|", dbDebugInfo);
        return {
            success: false,
            error: `DB error: ${msg} | ${dbDebugInfo}`,
        };
    }
}
