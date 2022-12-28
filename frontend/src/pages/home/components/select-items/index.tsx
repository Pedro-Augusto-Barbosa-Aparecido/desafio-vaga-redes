import React from "react";

import * as Select from "@radix-ui/react-select";

interface SelectItemProps {
  children: string | React.ReactNode;
  value: string;
}

export function SelectItem({ children, value }: SelectItemProps) {
  return (
    <Select.Item
      value={value}
      className="text-slate-500 font-semibold font-md w-full px-4 py-2 hover:cursor-pointer hover:bg-gray-700 hover:text-slate-400 outline-none"
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
}
