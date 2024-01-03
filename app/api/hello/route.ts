import { sql } from '@vercel/postgres';

import { Revenue } from '@/app/lib/definitions';
// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  
  const data = await sql<Revenue>`SELECT * FROM revenue`;
  console.log(data.rows);
    return new Response(JSON.stringify(data.rows));
}