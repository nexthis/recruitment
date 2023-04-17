import { apiUrl } from "@/utils/url"
import type {Product} from "api"

export async function all() {
   const response = await fetch(apiUrl("/product/all"))
   return await response.json()
}
all.key = "product"
 

export async function add(data: Partial<Product>) {
   const response = await fetch(apiUrl("/product/add"), {
       method: "POST", 
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
   })
   return await response.json()
}
all.key = "product.add"