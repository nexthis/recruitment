import { useMutation } from "@tanstack/vue-query";
import { add } from "@/api/order"
import type {Order} from "api"


export function useCreateOrder(){
    return useMutation({
        mutationFn: (data: Partial<Order>) => add(data)
    })
}