import { useDrop } from "react-dnd";

export const itemTypes = {
  STUDENT: "student",
};

export default function UseItemDrop(item) {
  const [_, drop] = useDrop(
    () => ({
      accept: item.type,
      drop: () => console.log("Item Dropped: ", item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [item]
  );

  return { drop, ..._ };
}
