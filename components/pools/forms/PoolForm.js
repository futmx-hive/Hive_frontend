import Field from "@form-components/Field";
import Select2 from "@form-components/Select2";
import CSVUpoloader from "@form-components/CSVUploader";
import OnAndOffBtn from "@shared/SmallComponents/OnAndOffBtn";
import Card from "@sharedUi/Card";
import AssignmentBoard from "@components/Project/components/AssignmentBoard";
import CtaButton from "@sharedUi/CtaButton";
import { years } from "@utils/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pool from "services/pool/pool.service";

function PoolForm() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const supervisors = [
    {
      label: "Dr Abdulazzez Damilola",
      value: "Dr Abdulazzez Damilola",
    },
    {
      label: "Mrs Bilikisu",
      value: "Mrs Bilikisu",
    },
    {
      label: "Dr Zubairu",
      value: "Dr Zubairu",
    },
    {
      label: "Mr Calistus",
      value: "Mr Calistus",
    },
    {
      label: "Dr Cosmos",
      value: "Dr Cosmos",
    },
  ];

  const studentType = [
    {
      label: "Masters",
      value: "masters",
    },
    {
      label: "Undergraduate",
      value: "undergraduate",
    },
  ];

  const [form, setForm] = useState({
    year: "",
    creator: "",
    supervisors: [],
    studentType: "",
    description: "",
    locked: false,
    assignees: [],
  });

  const handleAssignees = (value) => {
    setForm({ ...form, assignees: value });
  };
  const handleChange = (e) => {
    const value = e.payload;
    setForm({
      ...form,
      [e.name]: value,
    });
  };

  const createPool = async () => {
    setLoading(true);
    const PoolService = Pool;

    const data = {
      year: form.year,
      creator: form.creator,
      create_non_existent_students: true,
      assignees: form.assignees,
      students_type: form.studentType,
    };
    const sendRequest = PoolService.createPool(data);
    if (sendRequest?.success) {
      console.log("Pool has been created successfully");
    } else {
      console.log("An error occurred. Please try again");
    }
    setLoading(false);
  };
  return (
    <div className="container">
      <Card>
        <div className="form_pkg p-5">
          <div className="form_grid_2">
            <Select2
              id={"x"}
              name="year"
              handleChange={handleChange}
              label={"select year"}
              options={years}
            />
            <Field
              label={"creator"}
              name="creator"
              handleChange={handleChange}
              type="string"
              value={form.creator}
            />
          </div>
          <Select2
            label={"supervisors"}
            id={"y"}
            placeholder="select supervisors"
            name="supervisors"
            handleChange={handleChange}
            isMulti={true}
            options={supervisors}
          />

          <Select2
            // isLoading
            label={"students type"}
            name="studentType"
            handleChange={handleChange}
            placeholder={"e.g undergraduate masters or PHD"}
            // value={form.studentType}
            options={studentType}
          />
          <Field
            typeOfField={"textarea"}
            label={"description"}
            name="description"
            handleChange={handleChange}
            placeholder={"briefly describe thie data in the pool"}
            value={form.description}
          />
          <div className="mt-2">
            <CSVUpoloader
              type="csv"
              onChange={(data) => {
                console.log(data);
                setStudents(data);
              }}
            />
          </div>
          {students.length && (
            <AssignmentBoard
              supervisors={form.supervisors}
              handleAssignees={handleAssignees}
              students={students}
            />
          )}
          <div className="flexi gap-25 mt-4">
            <OnAndOffBtn
              on={form.locked}
              name={"locked"}
              onChange={handleChange}
            />
            <label htmlFor="lock" className="heading_md col-gra-l">
              {" "}
              lock this pool to prevent updates by another admin{" "}
            </label>
          </div>
          <div className="u-center p-3 center-flex">
            <CtaButton
              disabled={loading}
              classes="btn_wide_1"
              onClick={createPool}
            >
              {router.query.id
                ? "update pool"
                : loading
                ? "Creating pool..."
                : "Create Pool"}
            </CtaButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PoolForm;
