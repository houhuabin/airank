import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Flex } from "@radix-ui/themes";

export interface TagItem {
  id: string;
  label: string;
  checked: boolean;
}

interface CheckboxMultipleProps {
  items: TagItem[];
  onCheckboxChange: (item: TagItem) => void;
}

const CheckboxMultiple: React.FC<CheckboxMultipleProps> = ({
  items,
  onCheckboxChange,
}) => {
  return (
    <Flex gap="2" direction="column">
      {items.map((item) => (
        <Flex key={item.id} className="flex items-center space-x-2">
          <Checkbox
            id={item.id}
            checked={item.checked}
            onClick={() => onCheckboxChange(item)}
          />
          <label
            htmlFor={item.id}
            className="text-sm font-medium text-muted-foregrounds leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.label}
          </label>
        </Flex>
      ))}
    </Flex>
  );
};

export default CheckboxMultiple;
