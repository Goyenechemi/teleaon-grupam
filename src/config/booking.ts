export const BOOKING_CONFIG = {
    calUrl: "/ateleon/diagnosticmeeting",
    theme: "light" as const,
} as const;

export function getCalPrefill(params: {
    name?: string;
    email?: string;
    company?: string;
}) {
    return {
        name: params.name ?? "",
        email: params.email ?? "",
        notes: params.company ? `Empresa: ${params.company}` : "",
    };
}