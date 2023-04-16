import { useQuery } from "@tanstack/vue-query";
import { all } from "@/api/product"
import type {Product} from "api"


export function useProduct(){
    return useQuery<Array<Product>>({
        queryKey: [all.key],
        queryFn: all
    })
}