import { useQuery } from "@tanstack/react-query"
import axios from "axios";
export type ProjectsResponseType = {
    id: number,
    title: string,
    image: string,
    ldescription: string,
    category: string
}[];
//   data();
const useMyQuery = <T>(url: string) => useQuery({
    queryKey: ["queryProject"],
    queryFn: async () => {
        const response = await axios.get(url);

        return (response.data) as T;
    },
    retry: false,

})

export default useMyQuery;