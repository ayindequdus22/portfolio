import { useQuery } from "@tanstack/react-query"
import axios from "axios";
// import Axios from "./Axios";
export type ProjectsResponseType = {
    id: number,
    title: string,
    image: string,
    ldescription: string,
    category: string
}[];
 await fetch('https://fbztdnrslpleudvtaflf.supabase.co/rest/v1/countries', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZienRkbnJzbHBsZXVkdnRhZmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTMxNDcsImV4cCI6MjA3MDU2OTE0N30.kJVc3BIhdXz9hHEvGuGTEgtYTPKqHRL0BkT3nhXHZeo'
  }
})
  .then(res => {
    console.log(res);
    return res.json();
})
  .catch(error => {
    console.log(error)
    // Handle error
  });
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