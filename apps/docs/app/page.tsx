import {prisma} from "@repo/db/client"

export default async function Home(){
  const user=await prisma.user.findMany()

  return(
    <div>
      {
        JSON.stringify(user)
      }
    </div>
  )
}
// good way
export const revalidate=60 

// export const dynamic='force-dynamin'

