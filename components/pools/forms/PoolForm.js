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
import { toast } from "react-hot-toast";

function PoolForm() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const supervisors = [
    {
      label: "Dr Abdulazzez Damilola",
      value: "63e2076939bcd8fd1aa9f861",
    },

    {
      label: "Mr Calistus",
      value: "63e1c436c7c963eb21d382b2",
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

    // const data = {
    //   year: form.year,
    //   creator: form.creator,
    //   create_non_existent_students: true,
    //   assignees: form.assignees,
    //   description: form.description,
    //   students_type: form.studentType,
    // };

    const data = {
      year: form.year,
      creator: form.creator,
      create_non_existent_students: true,
      assignees: [
        {
          supervisor_id: "63e2076939bcd8fd1aa9f861",
          students: [
            {
              matric_no: "2016/2/56789CI",
              exam_num: "m1600544",
              first_name: "Sam",
              last_name: "smith ",
            },
            {
              matric_no: "2016/8/23489CT",
              exam_num: "m1823035",
              first_name: "Abel",
              last_name: "Okpoh ",
            },
            {
              matric_no: "2016/1/28672CI",
              exam_num: "m1099238",
              first_name: "Angelina",
              last_name: "Duweiwei ",
            },
            {
              matric_no: "2016/4/67908ct",
              exam_num: "m1836289",
              first_name: "Ada",
              last_name: "Appah ",
            },
          ],
        },
        {
          supervisor_id: "63e1c436c7c963eb21d382b2",
          students: [
            {
              matric_no: "2017/3/88935CI",
              exam_num: "m0966241",
              first_name: "John",
              last_name: "Bobo ",
            },
            {
              matric_no: "2016/2/56719CI",
              exam_num: "m0925199",
              first_name: "Salman",
              last_name: "Amechi ",
            },
            {
              matric_no: "2016/1/36109CT",
              exam_num: "m1098352",
              first_name: "Bilkiss",
              last_name: "Chiroma ",
            },
          ],
        },
      ],
      description: form.description,
      students_type: form.studentType,
    };

    try {
      const response = await PoolService.createPool(data);
      const sendRequest = response.data;
      if (sendRequest?.success) {
        console.log("Pool has been created successfully");
        toast.success(`Pool has been created successfully`);
        router.push("/pools");
      } else {
        console.log("An error occurred. Please try again");
        toast.error(`An error occurred. Please try again`);
      }
    } catch (error) {
      console.log("An error occurred. Please try again. ", error);
      toast.error(`An error occurred. Please try again`);
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
