import Card from "@sharedUi/Card";
import React, { useState } from "react";
import Field from "@form-components/Field";
import Select2 from "@form-components/Select2";
import { submissionTypes } from "@components/students/components/StudentSubmission";
import CtaButton from "@sharedUi/CtaButton";

function FormSubmission() {
  const [form, setForm] = useState({
    type: "",
    description: "",
    links: [],
  });

  const handleChange = (e) => {
    const value = e.payload;
    setForm({
      ...form,
      [e.name]: value,
    });
  };
  return (
    <div className="container-c583">
      <Card xtraClassNames={"p-3 mt-4"}>
        <form action="" className="form_pkg">
          <Select2
            label={"submission type"}
            placeholder={"what part of your project are you submitting"}
            options={submissionTypes.map((e) => ({
              label: e,
              option: e,
            }))}
            name="type"
            handleChange={handleChange}
          />
          <Field
            label={"description"}
            placeholder={
              "briefly infform your supervisor about this submission"
            }
            typeOfField={"textarea"}
            name="description"
            handleChange={handleChange}
          />

          <div className="grid_1_max al-center gap-15">
            <Field
              name="links"
              handleChange={handleChange}
              placeholder={"dropbox,google doc e.tc link to your work"}
            />
            <div className="center-flex">
              <button className="btn_bord btn_med btn_pri_light tablet">
                add
              </button>
            </div>
          </div>
          <CtaButton>submit</CtaButton>
        </form>
      </Card>
    </div>
  );
}

export default FormSubmission;
