import { useQuery } from "@tanstack/vue-query";
import { all } from "@/api/client"
import type {Client} from "api"


export function useClient(){
    return useQuery<Array<Client>>({
        queryKey: [all.key],
        queryFn: all
    })
}