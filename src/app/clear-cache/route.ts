import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("dato-data");

  return new Response(null, {
    status: 201,
  });
}

export const dynamic = "force-dynamic";
