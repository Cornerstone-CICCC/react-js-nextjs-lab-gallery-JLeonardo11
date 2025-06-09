export const revalidate = 120

export async function GET(){
  const res = await fetch(`https://placehold.co/1000x1000`)
  const data = await res.json()

  return Response.json(data)
}