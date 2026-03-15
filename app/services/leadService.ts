import type { LeadWaitlist, LeadContato } from "~/types/Lead";

type LeadPayload = LeadWaitlist | LeadContato;

export async function submitLead(payload: LeadPayload) {
  return await $fetch("/api/lead", {
    method: "POST",
    body: payload,
  });
}
