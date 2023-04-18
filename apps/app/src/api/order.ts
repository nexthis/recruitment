import { apiUrl } from "@/utils/url"
import type {Order} from "api"

export async function all() {
   const response = await fetch(apiUrl("/order/all"))
   return await response.json()
}
all.key = "order"
 

export async function add(data: Partial<Order>) {
   const response = await fetch(apiUrl("/order/add"), {
       method: "POST", 
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
   })
   return await response.json()
}
add.key = "order.add"