"use client";

import React, { useState } from "react";

type ListItem = {
  id: string;
  itemName: string;
  amount: string;
  expirationDate?: string; // Optional for different table configurations
  section?: string; // Optional for Shopping List
  selected: boolean;
};

type EditableTableLayoutProps = {
  title: string;
  columns: {
    header: string;
    accessor: keyof ListItem;
    type: "text" | "date" | "checkbox"; // Field type for input rendering
    placeholder?: string; // Optional placeholder for text fields
  }[];
};

const EditableTableLayout: React.FC<EditableTableLayoutProps> = ({
  title,
  columns,
}) => {
  const [data, setData] = useState<ListItem[]>([
    { id: "1", itemName: "", amount: "", expirationDate: "", section: "", selected: false },
    { id: "2", itemName: "", amount: "", expirationDate: "", section: "", selected: false },
  ]);

  const handleInputChange = (
    id: string,
    field: keyof ListItem,
    value: string | boolean
  ) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addRow = () => {
    setData((prev) => [
      ...prev,
      {
        id: (prev.length + 1).toString(),
        itemName: "",
        amount: "",
        expirationDate: "",
        section: "",
        selected: false,
      },
    ]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="border border-gray-300 px-4 py-2 bg-gray-100"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td key={col.accessor} className="border border-gray-300 px-4 py-2">
                  {col.type === "checkbox" ? (
                    <input
                      type="checkbox"
                      checked={item[col.accessor] as boolean}
                      onChange={(e) =>
                        handleInputChange(item.id, col.accessor, e.target.checked)
                      }
                    />
                  ) : col.type === "date" ? (
                    <input
                      type="date"
                      value={(item[col.accessor] as string) || ""}
                      onChange={(e) =>
                        handleInputChange(item.id, col.accessor, e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    <input
                      type="text"
                      value={(item[col.accessor] as string) || ""}
                      onChange={(e) =>
                        handleInputChange(item.id, col.accessor, e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                      placeholder={col.placeholder || ""}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Row
      </button>
    </div>
  );
};

export default EditableTableLayout;
