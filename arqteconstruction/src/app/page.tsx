"use client";

import { useActionState } from "react";
import { createRequest, type CreateRequestState } from "@/app/actions/request-actions";

const initialState: CreateRequestState = {
  success: false,
};

export default function Home() {
  const [state, formAction, pending] = useActionState(createRequest, initialState);

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-16 text-neutral-900">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Request a Quote</h1>
        <p className="mt-2 text-sm text-neutral-600">
          This is a temporary test form to verify the Prisma + Supabase flow.
        </p>

        <form action={formAction} className="mt-8 space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
          />
          <input
            name="phone"
            placeholder="Phone"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
          />
          <input
            name="company"
            placeholder="Company"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
          />
          <input
            name="projectAddress"
            placeholder="Project Address"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
          />

          <select
            name="serviceType"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service type
            </option>
            <option value="NEW_CONSTRUCTION">New Construction</option>
            <option value="REMODELING">Remodeling</option>
            <option value="EXTERIOR_ENVELOPE">Exterior Envelope</option>
            <option value="WINDOWS_DOORS_RAILINGS">Windows, Doors & Railings</option>
            <option value="INTERIOR_GLASS">Interior Glass</option>
            <option value="SERVICE_MAINTENANCE">Service & Maintenance</option>
            <option value="PRODUCTS">Products</option>
          </select>

          <textarea
            name="description"
            placeholder="Project description"
            rows={5}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3"
          />

          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-neutral-900 px-5 py-3 text-white disabled:opacity-50"
          >
            {pending ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        {state.error ? (
          <p className="mt-4 text-sm text-red-600">{state.error}</p>
        ) : null}

        {state.success ? (
          <p className="mt-4 text-sm text-green-600">
            Request submitted successfully.
          </p>
        ) : null}
      </div>
    </main>
  );
}