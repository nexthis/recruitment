import { apiUrl } from "@/utils/url"

export async function all() {
   const response = await fetch(apiUrl("/product/all"))
   return await response.json()
}
all.key = "product"
 