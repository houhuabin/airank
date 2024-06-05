import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./CollapsibleCheckbox.css";
import { Flex, Text } from "@radix-ui/themes";
const CollapsibleCheckbox = () => {
  return (
    <Flex gap="3" direction="column">
      <Flex className="w-1/3 bg-slate-100">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox.Root className="CheckboxRoot" defaultChecked id="image">
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <Text>Image</Text>
        </div>
      </Flex>
    </Flex>
  );
};

const RadixChexBox = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="image">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="image">
        Image
      </label>
    </div>
  );
};
export default CollapsibleCheckbox;
