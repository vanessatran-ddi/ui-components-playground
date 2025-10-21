import {
  GoabBadge,
  GoabButton, GoabButtonGroup,
  GoabCheckbox,
  GoabDrawer,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/react-components";
import { useState } from "react";
import {
  GoabDrawerPosition,
  GoabRadioGroupOnChangeDetail,
} from "@abgov/ui-components-common";

export const Drawer = () => {
  const [open, setOpen] = useState(false);
  const [openNoActions, setOpenNoActions] = useState(false);
  const [position, setPosition] = useState<GoabDrawerPosition>("left");
  const [dateTaken, setDateTaken] = useState("today");
  const [hasActionsSlot, setActionsSlot] = useState<string>("y");
  const changeDateTaken = (event: GoabRadioGroupOnChangeDetail) => {
    setDateTaken(event.value  as string);
  };

  const openDrawer = () => {
    if (hasActionsSlot === "n") {
      setOpenNoActions(true);
    } else {
      setOpen(true);
    }
  }
  return (
    <>
      <h1>Drawer</h1>
      <GoabDrawer
        maxSize={"100px"}
        open={open}
        onClose={() => setOpen(false)}
        position={position}
        heading="Filters"
        actions={
          <>
            <GoabButton onClick={() => setOpen(false)} type="secondary">
              Apply
            </GoabButton>
          </>
        }
      >
        <GoabFormItem>
          <GoabCheckbox name={"drafted"} checked={false} text={"Drafted"} />
          <GoabCheckbox name={"published"} checked={false} text={"Published"} />
        </GoabFormItem>

        <GoabFormItem label="Assigned to - Region">
          <GoabCheckbox name={"Calgary"} checked={false} text={"Calgary"} />
          <GoabCheckbox name={"Edmonton"} checked={false} text={"Edmonton"} />
          <GoabCheckbox name={"Central"} checked={false} text={"Central"} />
          <GoabCheckbox name={"North"} checked={false} text={"North"} />
          <GoabCheckbox name={"South"} checked={false} text={"South"} />
        </GoabFormItem>
        <GoabFormItem label="Taken by - Region">
          <GoabCheckbox name={"Calgary"} checked={false} text={"Calgary"} />
          <GoabCheckbox name={"Edmonton"} checked={false} text={"Edmonton"} />
          <GoabCheckbox name={"Central"} checked={false} text={"Central"} />
          <GoabCheckbox name={"North"} checked={false} text={"North"} />
          <GoabCheckbox name={"South"} checked={false} text={"South"} />
        </GoabFormItem>
        <GoabFormItem label="Date taken">
          <GoabRadioGroup
            name={"date-taken"}
            value={dateTaken}
            onChange={changeDateTaken}
          >
            <GoabRadioItem value={"today"} label={"Today"} />
            <GoabRadioItem value={"this-week"} label={"By this week"} />
          </GoabRadioGroup>
        </GoabFormItem>
      </GoabDrawer>

      <GoabDrawer
        open={openNoActions}
        position={position}
        onClose={() => setOpenNoActions(false)}
        heading={<>
      <GoabBadge type="information" content="Heading is a slot"></GoabBadge>
      </>}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </GoabDrawer>

      <GoabFormItem label="Has Actions Slot">
        <GoabRadioGroup name={"hasActionsSlot"} value={hasActionsSlot} onChange={(e: GoabRadioGroupOnChangeDetail) => setActionsSlot(e.value  as string)}>
          <GoabRadioItem value={"y"} label={"Has Actions Slot"} />
          <GoabRadioItem value={"n"} label={"Not have actions slot"} />
        </GoabRadioGroup>
      </GoabFormItem>

      <GoabFormItem label="Position">
        <GoabRadioGroup name={"position"} value={position} onChange={(e: GoabRadioGroupOnChangeDetail) => setPosition(e.value as GoabDrawerPosition)}>
          <GoabRadioItem value={"left"} label={"Left"} />
          <GoabRadioItem value={"right"} label={"Right"} />
          <GoabRadioItem value={"bottom"} label={"Bottom"} />
        </GoabRadioGroup>
      </GoabFormItem>

      <GoabButtonGroup alignment={"start"} mt="xl">
        <GoabButton onClick={openDrawer} type="primary">Open Drawer</GoabButton>
      </GoabButtonGroup>
    </>
  );
};
