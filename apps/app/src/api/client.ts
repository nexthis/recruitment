import { apiUrl } from "@/utils/url"
import type {Client} from "api"

export async function all() {
  const response = await fetch(apiUrl("/client/all"))
  return await response.json()
}
all.key = "client"


export async function add(data: Partial<Client>) {
   const response = await fetch(apiUrl("/client/add"), {
       method: "POST", 
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
   })
   return await response.json()
}
add.key = "client.add"