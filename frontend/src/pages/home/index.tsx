import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./components/select-items";
import Chart from "react-google-charts";

import { useState } from "react";
import { PresentationChart, TrashSimple } from "phosphor-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/axios";

interface ICity {
  name: string;
  id: number;
}

export function Home() {
  const [selectedCity, setSelectedCity] = useState<string>();
  const { data: cities } = useQuery(["cities"], async () => {
    const response = await api.get("/networking/cities");
    return response.data.results;
  });

  const { data: cellInfo } = useQuery(
    ["cell-information", selectedCity],
    async () => {
      const response = await api.get(`/networking/info/${selectedCity}`);
      return response.data;
    }
  );

  function formatDataChartCellByUserConnected(data: any, header: string[]) {
    const dates = Object.keys(data);
    const dataFormatted = [["Days", ...header]];

    for (const date of dates) {
      try {
        const aux: any[] = [date];
        for (const cell of header) {
          if (!data[date][cell]) aux.push(null);
          else aux.push(data[date][cell].length);
        }

        dataFormatted.push(aux);
      } catch (e) {
        // console.log(e);
      }
    }

    return dataFormatted;
  }

  function formatDataChartSizeConnection(data: any, header: string[]) {
    const dates = Object.keys(data);
    const dataFormatted = [["Days", ...header]];

    for (const date of dates) {
      try {
        const aux: any[] = [date];

        for (const cell of header) {
          if (!data[date][cell]) aux.push(null);
          else
            aux.push(
              parseFloat(
                (
                  data[date][cell].reduce((acc: number, cellInfo: any) => {
                    return Number(cellInfo.size) + acc;
                  }, 0) / Math.pow(10, 6)
                ).toFixed(3)
              )
            );
        }

        dataFormatted.push(aux);
      } catch (e) {
        // console.log(e);
      }
    }

    return dataFormatted;
  }

  function clearFilter() {
    setSelectedCity("----");
  }

  const notCitySelectedOrEmpty = !selectedCity || selectedCity === "----";

  return (
    <div className="h-container-graph w-full gap-4 flex flex-col justify-center items-center">
      <section className="w-10/12 h-16 rounded-md bg-gray-900 flex justify-between items-center p-4 relative">
        <button
          onClick={clearFilter}
          className="text-slate-500 border-0 bg-transparent flex items-center justify-center gap-2 font-semibold hover:text-slate-400"
        >
          <TrashSimple size={20} />
          Clear
        </button>
        <Select.Root onValueChange={setSelectedCity} value={selectedCity}>
          <Select.Trigger
            aria-label="City"
            className="flex items-center justify-center gap-2 font-semibold text-slate-500 text-md p-2 focus:outline-none hover:text-slate-400"
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
                  {cities?.map((city: ICity) => {
                    return (
                      <SelectItem value={city.name} key={city.id}>
                        {city.name}
                      </SelectItem>
                    );
                  })}
                  <SelectItem value="----">
                    -------------------------
                  </SelectItem>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </section>
      <main className="w-10/12 p-4 bg-slate-900 flex items-center justify-center gap-4">
        {notCitySelectedOrEmpty ? (
          <div className="h-96 flex justify-center items-center flex-col gap-8">
            <span className="text-slate-800 font-semibold text-2xl">
              No city selected, please select a city to show graphs!
            </span>
            <PresentationChart
              size={128}
              className="text-slate-800"
              weight="light"
            />
          </div>
        ) : (
          <>
            <section className="w-1/2 p-4 bg-white rounded-md">
              <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={
                  cellInfo
                    ? formatDataChartCellByUserConnected(
                        cellInfo.results,
                        cellInfo.header
                      )
                    : []
                }
                options={{
                  chart: {
                    title: "Users connected per cells",
                    subtitle: "Quantity of connections of enodeb",
                  },
                  vAxis: {
                    minValue: 0,
                  },
                }}
              />
            </section>
            <section className="w-1/2 p-4 bg-white rounded-md">
              <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={
                  cellInfo
                    ? formatDataChartSizeConnection(
                        cellInfo.results,
                        cellInfo.header
                      )
                    : []
                }
                options={{
                  chart: {
                    title: "Size (MB) of connect each cells",
                    subtitle: "Size quantity of connections cells per date",
                  },
                  vAxis: {
                    minValue: 0,
                    title: "Scale in MB",
                  },
                }}
              />
            </section>
          </>
        )}
      </main>
    </div>
  );
}
