import UseItemDrop, { itemTypes } from "@hooks/UseItemDrop";
import Faq from "@sharedUi/FaQ";
import StudentCard from "@sharedUi/StudentCard";

function SupervisorAndStudents({ supervisor = {}, students = [] }) {
  //   console.log("Students: ", students.length);

  const { drop, isOver } = UseItemDrop({ type: itemTypes.STUDENT });

  console.log("Is Over? ", isOver);

  const heading = (
    <h5 className="heading_med weit-1 col-g cap">{supervisor.name}</h5>
  );
  return (
    <div ref={drop}>
      <Faq Component={heading} openClasses={"bord-g-1 br"}>
        {students.map((stud, index) => (
          <StudentCard
            key={stud.exam_no}
            name={stud.first_name + " " + stud.last_name}
          />
        ))}
      </Faq>
    </div>
  );
}

export default SupervisorAndStudents;
