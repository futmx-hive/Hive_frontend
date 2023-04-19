import Submission from "./submission.service";
import { useQuery, useMutation } from "react-query";


export const useSubmitChapters = () => {
    return useMutation(Submission.submitChapters)
}