import { useDrag } from "react-dnd";

export const itemTypes = {
  STUDENT: "student",
};

export default function UseItemDrag(item) {
  const [_, drag] = useDrag(() => ({
    type: item.type,
    end() {
      console.log("end", _);
    },
    collect(monitor) {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));

  return { drag, ..._ };
}
