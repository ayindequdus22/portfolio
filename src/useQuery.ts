import { useQuery } from "@tanstack/react-query"
import Axios from "./Axios";
export type ProjectsResponseType = {
    id: number,
    title: string,
    image: string,
    ldescription: string,
    category: string
}[];
const useMyQuery = <T>(url: string) => useQuery({
    queryKey: ["queryProject"],
    queryFn: async () => {
        const response = await Axios.get(url);

        return (response.data) as T;
    },
    retry: false,

})

export default useMyQuery;