import { apiUrl } from "@/utils/url"

export async function all() {
   const response = await fetch(apiUrl("/order/all"))
   return await response.json()
}
all.key = "order"
 