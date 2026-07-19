/**
 * Web3Forms access key — used by every form on the site (contact + newsletter).
 * This key is public by design (it maps to the destination inbox, not a secret),
 * so it lives in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY like the analytics IDs.
 * Set it in `.env.local` for local dev and in the Vercel Environment Variables.
 */
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
