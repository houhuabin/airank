import React, { useState, useEffect } from "react";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CheckboxMultiple, { TagItem } from "./CheckboxMultiple";
import { useRouter, useSearchParams } from "next/navigation";

interface CollapsibleCheckboxListProps {
  title: string;
  initialItems: TagItem[];
  onCheckboxChange: (item: TagItem) => void;
}

const CollapsibleCheckboxList: React.FC<CollapsibleCheckboxListProps> = ({
  title,
  initialItems,
  onCheckboxChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<TagItem[]>(initialItems);

  const handleCheckboxChange = (changedItem: TagItem) => {
    const updatedItems = items.map((item) =>
      item.id === changedItem.id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    onCheckboxChange(changedItem);
  };

  return (
    <div className="border-t border-slate-200">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between space-x-4 px-4 my-2ss">
          <h4 className="text-sm font-semibold">{title}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <CheckboxMultiple
            items={items}
            onCheckboxChange={handleCheckboxChange}
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleCheckboxList;
