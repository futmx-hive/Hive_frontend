import * as Yup from "yup"
export const submissionSchema = Yup.object().shape({
        type: Yup.string().required(),
    description: Yup.string().min(10).required("description is required"),
    links:Yup.string().url("valid google docx or dropbox link").required("specify a link to the file for this submission"),

}) 