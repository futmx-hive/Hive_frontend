import Card from "@sharedUi/Card";
import React, { useState } from "react";
import Field from "@form-components/Field";
import Select2 from "@form-components/Select2";
import { submissionTypes } from "@components/students/components/StudentSubmission";
import CtaButton from "@sharedUi/CtaButton";
import Submission from "services/submission/submission.service";

import { submissionSchema } from "@shared/models/schema"


import UseForm from "formconfigs/UseForm";
import { useSubmitChapters } from "services/submission/submission.queries";

const data =submissionTypes.map((e,i) => ({
  label: e,
  value:i ,
}))

const initialState = {
  fields:{
    type: "",
    description: "",
    links:"",
    poolId: 'yrfghryfbghbjfh76t6',
    studentId:'83yt363gh3bju'
  }
}

function FormSubmission() {

  const submissionM = useSubmitChapters()
  
const {values,errors,onChange,formIsValid} = UseForm(initialState,submissionSchema)





  const handleSubmit = async (e) => {
    e.preventDefault()
  console.log(values)
  
const data = {
  ...values,
  links: [values.links]
}
      const response = await submissionM.mutate(data)



  }

  return (
    <div className="container-c583">
      <Card xtraClassNames={"p-3 mt-4"}>
        <form action="" className="form_pkg" >
          <Select2
            label={"submission type"}
            placeholder={"what part of your project are you submitting"}
            options={data}
            value={values["type"] ? {value:values["type"],label: data.find((e)=>e.value==values["type"]).label } : null}
            name="type"
            handleChange={onChange}
            error={errors["type"]}
          />
          <Field
		    value={values["description"]}
        error={errors["description"]}
            label={"description"}
            placeholder={
              "briefly infform your supervisor about this submission"
            }

            typeOfField={"textarea"}
            name="description"
            handleChange={onChange}
          />

          <div className="grid_1_max al-center gap-15">
            <Field
			//   value={}
      value={values["links"]}
      error={errors["links"]}
              name="links"
              handleChange={onChange}
              placeholder={"dropbox,google doc e.tc link to your work"}
            />
            <div className="center-flex">

			     
            </div>
          </div>
          <CtaButton disabled={!formIsValid} onClick={handleSubmit} >submit</CtaButton>
        </form>
      </Card>
    </div>
  );
}

export default FormSubmission;
