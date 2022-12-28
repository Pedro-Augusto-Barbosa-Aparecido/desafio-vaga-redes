import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./components/select-items";
import Chart from "react-google-charts";

import colors from "tailwindcss/colors";

const data = {
  results: {
    "54CAS": [
      {
        created_at: "2022-12-28T10:55:25.052",
        id: 45,
        networking__cell_name: "54CAS",
        networking_id: 6,
        size: "1900957.31",
      },
    ],
    "65SCA": [
      {
        created_at: "2022-12-28T10:50:45.981",
        id: 40,
        networking__cell_name: "65SCA",
        networking_id: 7,
        size: "2860732.86",
      },
      {
        created_at: "2022-12-28T10:50:48.769",
        id: 43,
        networking__cell_name: "65SCA",
        networking_id: 7,
        size: "1988581.50",
      },
    ],
    "08BSF": [
      {
        created_at: "2022-12-28T10:50:47.727",
        id: 41,
        networking__cell_name: "08BSF",
        networking_id: 9,
        size: "2896671.67",
      },
      {
        created_at: "2022-12-28T10:50:48.241",
        id: 42,
        networking__cell_name: "08BSF",
        networking_id: 9,
        size: "1864445.57",
      },
    ],
    "43CSA": [
      {
        created_at: "2022-12-28T10:55:23.238",
        id: 44,
        networking__cell_name: "43CSA",
        networking_id: 10,
        size: "1978805.49",
      },
    ],
  },
};

export function Home() {
  function formatDataChartCellByUserConnected(data: any) {
    const keys = Object.keys(data.results);
    const dataFormatted = [["Cell", "Connections"]];

    for (const key of keys) {
      const info = data.results[key];
      dataFormatted.push([key, info.length]);
    }

    return dataFormatted;
  }

  return (
    <div className="h-container-graph w-full gap-4 flex flex-col justify-center items-center">
      <section className="w-10/12 h-16 rounded-md bg-gray-900 flex justify-end items-center p-4 relative">
        <Select.Root>
          <Select.Trigger
            aria-label="City"
            className="flex items-center justify-center gap-2 font-semibold text-slate-500 text-md p-2 focus:outline-none hover:opacity-95"
          >
            <Select.Value placeholder="Select a city..." />
            <Select.SelectIcon>
              <ChevronDownIcon className="text-slate-500 font-bold" />
            </Select.SelectIcon>
          </Select.Trigger>
          <Select.Portal className="shadow-xl">
            <Select.Content className="bg-gray-800 rounded-lg w-56 overflow-hidden max-w-lg scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
              <Select.Viewport className="">
                <Select.Group className="w-full">
                  <SelectItem value="santa rita">
                    Santa Rita do Sapucaí
                  </SelectItem>
                  <SelectItem value="pouso alegre">Pouso Alegre</SelectItem>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </section>
      <main className="w-10/12 p-4 bg-slate-900 flex items-center justify-center gap-4">
        <section className="w-1/2 p-4 bg-white rounded-md">
          <Chart
            chartType={"Bar"}
            options={{
              backgroundColor: "#0f172a",
              // animation: {},
              title: "User connections per cell of Santa Rita",
              vAxis: {
                title: "Connections",
                minValue: 0,
              },
              hAxis: {},
              height: 400,
              chartArea: { width: "30%", height: "fit-content" },
            }}
            data={formatDataChartCellByUserConnected(data)}
          />
        </section>
        <section className="w-1/2 p-4 bg-white rounded-md">
          <Chart
            chartType={"Bar"}
            options={{
              backgroundColor: "#0f172a",
              // animation: {},
              title: "User connections per cell of Santa Rita",
              vAxis: {
                title: "Connections",
                minValue: 0,
              },
              hAxis: {},
              height: 400,
              chartArea: { width: "30%" },
            }}
            data={formatDataChartCellByUserConnected(data)}
          />
        </section>
      </main>
    </div>
  );
}
