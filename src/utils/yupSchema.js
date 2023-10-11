import data from "../data/data.json";
import * as Yup from "yup";
const { form } = data;
export const formSchema = Yup.object().shape({
  email: Yup.string()
    .required(form.emailInvalid)
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      form.emailInvalid
    ),
  subject: Yup.string()
    .required(form.subjectInvalid)
    .min(3, form.subjectInvalid)
    .max(300, form.subjectInvalid),
  content: Yup.string()
    .required(form.contentInvalid)
    .min(3, form.contentInvalid)
    .max(500, form.contentInvalid),
});
