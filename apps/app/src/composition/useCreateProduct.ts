import { useMutation } from "@tanstack/vue-query";
import { add } from "@/api/product"
import type {Product} from "api"


export function useCreateProduct(){
    return useMutation({
        mutationFn: (data: Partial<Product>) => add(data)
    })
}