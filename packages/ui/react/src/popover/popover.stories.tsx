import { Popover, PopoverTrigger, PopoverContent } from "./popover";

export default { title: "Components/Popover" };

export const Default = () => {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent align="start">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};
