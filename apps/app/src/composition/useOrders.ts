import { useQuery } from "@tanstack/vue-query";
import { all } from "@/api/order"
import type {Order} from "api"


export function useOrders(){
    return useQuery<Array<Order>>({
        queryKey: [all.key],
        queryFn: all
    })
}