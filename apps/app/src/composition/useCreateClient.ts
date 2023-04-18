import { useMutation } from "@tanstack/vue-query";
import { add } from "@/api/client"
import type {Client} from "api"


export function useCreateProduct(){
    return useMutation({
        mutationFn: (data: Partial<Client>) => add(data)
    })
}