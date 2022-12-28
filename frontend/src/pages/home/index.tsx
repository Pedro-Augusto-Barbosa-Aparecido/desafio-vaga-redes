import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./components/select-items";
import Chart from "react-google-charts";

import colors from "tailwindcss/colors";

const data = {
  results: {
    "2022-12-28": {
      "34VDS": [
        {
          created_at: "2022-12-28",
          id: 85,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1886946.58",
        },
        {
          created_at: "2022-12-28",
          id: 87,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2896193.15",
        },
        {
          created_at: "2022-12-28",
          id: 76,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1934545.24",
        },
        {
          created_at: "2022-12-29",
          id: 79,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2472197.83",
        },
        {
          created_at: "2022-12-29",
          id: 78,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2932833.23",
        },
        {
          created_at: "2022-12-29",
          id: 77,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2702987.68",
        },
        {
          created_at: "2022-12-30",
          id: 89,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2482795.34",
        },
        {
          created_at: "2022-12-31",
          id: 99,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2317310.03",
        },
        {
          created_at: "2023-01-01",
          id: 104,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2620440.50",
        },
      ],
      "08BSF": [
        {
          created_at: "2022-12-28",
          id: 86,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1999207.46",
        },
        {
          created_at: "2022-12-28",
          id: 88,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2229569.22",
        },
        {
          created_at: "2022-12-28",
          id: 74,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2613779.69",
        },
        {
          created_at: "2022-12-29",
          id: 81,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1858619.86",
        },
        {
          created_at: "2022-12-30",
          id: 93,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2567959.68",
        },
        {
          created_at: "2022-12-31",
          id: 100,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2633314.45",
        },
        {
          created_at: "2022-12-31",
          id: 98,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1831921.02",
        },
      ],
      "65SCA": [
        {
          created_at: "2022-12-28",
          id: 84,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2875540.33",
        },
        {
          created_at: "2022-12-28",
          id: 75,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2130746.16",
        },
        {
          created_at: "2022-12-29",
          id: 80,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2923779.75",
        },
        {
          created_at: "2022-12-30",
          id: 90,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "1893874.55",
        },
        {
          created_at: "2022-12-30",
          id: 91,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2310176.88",
        },
      ],
      "43CSA": [
        {
          created_at: "2022-12-29",
          id: 82,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2034455.56",
        },
        {
          created_at: "2022-12-29",
          id: 83,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2707341.15",
        },
        {
          created_at: "2022-12-30",
          id: 92,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2347612.14",
        },
        {
          created_at: "2022-12-30",
          id: 96,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2872268.06",
        },
        {
          created_at: "2022-12-30",
          id: 95,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "1806397.08",
        },
        {
          created_at: "2022-12-31",
          id: 101,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2827167.01",
        },
        {
          created_at: "2022-12-31",
          id: 97,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2562444.42",
        },
        {
          created_at: "2023-01-01",
          id: 102,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2751877.60",
        },
      ],
      "54CAS": [
        {
          created_at: "2022-12-30",
          id: 94,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2336302.91",
        },
        {
          created_at: "2023-01-01",
          id: 103,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2266500.64",
        },
      ],
    },
    "2022-12-29": {
      "34VDS": [
        {
          created_at: "2022-12-28",
          id: 85,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1886946.58",
        },
        {
          created_at: "2022-12-28",
          id: 87,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2896193.15",
        },
        {
          created_at: "2022-12-28",
          id: 76,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1934545.24",
        },
        {
          created_at: "2022-12-29",
          id: 79,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2472197.83",
        },
        {
          created_at: "2022-12-29",
          id: 78,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2932833.23",
        },
        {
          created_at: "2022-12-29",
          id: 77,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2702987.68",
        },
        {
          created_at: "2022-12-30",
          id: 89,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2482795.34",
        },
        {
          created_at: "2022-12-31",
          id: 99,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2317310.03",
        },
        {
          created_at: "2023-01-01",
          id: 104,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2620440.50",
        },
      ],
      "08BSF": [
        {
          created_at: "2022-12-28",
          id: 86,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1999207.46",
        },
        {
          created_at: "2022-12-28",
          id: 88,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2229569.22",
        },
        {
          created_at: "2022-12-28",
          id: 74,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2613779.69",
        },
        {
          created_at: "2022-12-29",
          id: 81,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1858619.86",
        },
        {
          created_at: "2022-12-30",
          id: 93,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2567959.68",
        },
        {
          created_at: "2022-12-31",
          id: 100,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2633314.45",
        },
        {
          created_at: "2022-12-31",
          id: 98,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1831921.02",
        },
      ],
      "65SCA": [
        {
          created_at: "2022-12-28",
          id: 84,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2875540.33",
        },
        {
          created_at: "2022-12-28",
          id: 75,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2130746.16",
        },
        {
          created_at: "2022-12-29",
          id: 80,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2923779.75",
        },
        {
          created_at: "2022-12-30",
          id: 90,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "1893874.55",
        },
        {
          created_at: "2022-12-30",
          id: 91,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2310176.88",
        },
      ],
      "43CSA": [
        {
          created_at: "2022-12-29",
          id: 82,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2034455.56",
        },
        {
          created_at: "2022-12-29",
          id: 83,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2707341.15",
        },
        {
          created_at: "2022-12-30",
          id: 92,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2347612.14",
        },
        {
          created_at: "2022-12-30",
          id: 96,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2872268.06",
        },
        {
          created_at: "2022-12-30",
          id: 95,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "1806397.08",
        },
        {
          created_at: "2022-12-31",
          id: 101,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2827167.01",
        },
        {
          created_at: "2022-12-31",
          id: 97,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2562444.42",
        },
        {
          created_at: "2023-01-01",
          id: 102,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2751877.60",
        },
      ],
      "54CAS": [
        {
          created_at: "2022-12-30",
          id: 94,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2336302.91",
        },
        {
          created_at: "2023-01-01",
          id: 103,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2266500.64",
        },
      ],
    },
    "2022-12-30": {
      "34VDS": [
        {
          created_at: "2022-12-28",
          id: 85,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1886946.58",
        },
        {
          created_at: "2022-12-28",
          id: 87,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2896193.15",
        },
        {
          created_at: "2022-12-28",
          id: 76,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1934545.24",
        },
        {
          created_at: "2022-12-29",
          id: 79,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2472197.83",
        },
        {
          created_at: "2022-12-29",
          id: 78,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2932833.23",
        },
        {
          created_at: "2022-12-29",
          id: 77,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2702987.68",
        },
        {
          created_at: "2022-12-30",
          id: 89,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2482795.34",
        },
        {
          created_at: "2022-12-31",
          id: 99,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2317310.03",
        },
        {
          created_at: "2023-01-01",
          id: 104,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2620440.50",
        },
      ],
      "08BSF": [
        {
          created_at: "2022-12-28",
          id: 86,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1999207.46",
        },
        {
          created_at: "2022-12-28",
          id: 88,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2229569.22",
        },
        {
          created_at: "2022-12-28",
          id: 74,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2613779.69",
        },
        {
          created_at: "2022-12-29",
          id: 81,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1858619.86",
        },
        {
          created_at: "2022-12-30",
          id: 93,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2567959.68",
        },
        {
          created_at: "2022-12-31",
          id: 100,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2633314.45",
        },
        {
          created_at: "2022-12-31",
          id: 98,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1831921.02",
        },
      ],
      "65SCA": [
        {
          created_at: "2022-12-28",
          id: 84,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2875540.33",
        },
        {
          created_at: "2022-12-28",
          id: 75,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2130746.16",
        },
        {
          created_at: "2022-12-29",
          id: 80,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2923779.75",
        },
        {
          created_at: "2022-12-30",
          id: 90,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "1893874.55",
        },
        {
          created_at: "2022-12-30",
          id: 91,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2310176.88",
        },
      ],
      "43CSA": [
        {
          created_at: "2022-12-29",
          id: 82,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2034455.56",
        },
        {
          created_at: "2022-12-29",
          id: 83,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2707341.15",
        },
        {
          created_at: "2022-12-30",
          id: 92,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2347612.14",
        },
        {
          created_at: "2022-12-30",
          id: 96,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2872268.06",
        },
        {
          created_at: "2022-12-30",
          id: 95,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "1806397.08",
        },
        {
          created_at: "2022-12-31",
          id: 101,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2827167.01",
        },
        {
          created_at: "2022-12-31",
          id: 97,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2562444.42",
        },
        {
          created_at: "2023-01-01",
          id: 102,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2751877.60",
        },
      ],
      "54CAS": [
        {
          created_at: "2022-12-30",
          id: 94,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2336302.91",
        },
        {
          created_at: "2023-01-01",
          id: 103,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2266500.64",
        },
      ],
    },
    "2022-12-31": {
      "34VDS": [
        {
          created_at: "2022-12-28",
          id: 85,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1886946.58",
        },
        {
          created_at: "2022-12-28",
          id: 87,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2896193.15",
        },
        {
          created_at: "2022-12-28",
          id: 76,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1934545.24",
        },
        {
          created_at: "2022-12-29",
          id: 79,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2472197.83",
        },
        {
          created_at: "2022-12-29",
          id: 78,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2932833.23",
        },
        {
          created_at: "2022-12-29",
          id: 77,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2702987.68",
        },
        {
          created_at: "2022-12-30",
          id: 89,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2482795.34",
        },
        {
          created_at: "2022-12-31",
          id: 99,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2317310.03",
        },
        {
          created_at: "2023-01-01",
          id: 104,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2620440.50",
        },
      ],
      "08BSF": [
        {
          created_at: "2022-12-28",
          id: 86,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1999207.46",
        },
        {
          created_at: "2022-12-28",
          id: 88,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2229569.22",
        },
        {
          created_at: "2022-12-28",
          id: 74,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2613779.69",
        },
        {
          created_at: "2022-12-29",
          id: 81,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1858619.86",
        },
        {
          created_at: "2022-12-30",
          id: 93,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2567959.68",
        },
        {
          created_at: "2022-12-31",
          id: 100,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2633314.45",
        },
        {
          created_at: "2022-12-31",
          id: 98,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1831921.02",
        },
      ],
      "65SCA": [
        {
          created_at: "2022-12-28",
          id: 84,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2875540.33",
        },
        {
          created_at: "2022-12-28",
          id: 75,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2130746.16",
        },
        {
          created_at: "2022-12-29",
          id: 80,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2923779.75",
        },
        {
          created_at: "2022-12-30",
          id: 90,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "1893874.55",
        },
        {
          created_at: "2022-12-30",
          id: 91,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2310176.88",
        },
      ],
      "43CSA": [
        {
          created_at: "2022-12-29",
          id: 82,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2034455.56",
        },
        {
          created_at: "2022-12-29",
          id: 83,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2707341.15",
        },
        {
          created_at: "2022-12-30",
          id: 92,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2347612.14",
        },
        {
          created_at: "2022-12-30",
          id: 96,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2872268.06",
        },
        {
          created_at: "2022-12-30",
          id: 95,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "1806397.08",
        },
        {
          created_at: "2022-12-31",
          id: 101,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2827167.01",
        },
        {
          created_at: "2022-12-31",
          id: 97,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2562444.42",
        },
        {
          created_at: "2023-01-01",
          id: 102,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2751877.60",
        },
      ],
      "54CAS": [
        {
          created_at: "2022-12-30",
          id: 94,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2336302.91",
        },
        {
          created_at: "2023-01-01",
          id: 103,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2266500.64",
        },
      ],
    },
    "2023-01-01": {
      "34VDS": [
        {
          created_at: "2022-12-28",
          id: 85,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1886946.58",
        },
        {
          created_at: "2022-12-28",
          id: 87,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2896193.15",
        },
        {
          created_at: "2022-12-28",
          id: 76,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "1934545.24",
        },
        {
          created_at: "2022-12-29",
          id: 79,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2472197.83",
        },
        {
          created_at: "2022-12-29",
          id: 78,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2932833.23",
        },
        {
          created_at: "2022-12-29",
          id: 77,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2702987.68",
        },
        {
          created_at: "2022-12-30",
          id: 89,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2482795.34",
        },
        {
          created_at: "2022-12-31",
          id: 99,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2317310.03",
        },
        {
          created_at: "2023-01-01",
          id: 104,
          networking__cell_name: "34VDS",
          networking_id: 8,
          size: "2620440.50",
        },
      ],
      "08BSF": [
        {
          created_at: "2022-12-28",
          id: 86,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1999207.46",
        },
        {
          created_at: "2022-12-28",
          id: 88,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2229569.22",
        },
        {
          created_at: "2022-12-28",
          id: 74,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2613779.69",
        },
        {
          created_at: "2022-12-29",
          id: 81,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1858619.86",
        },
        {
          created_at: "2022-12-30",
          id: 93,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2567959.68",
        },
        {
          created_at: "2022-12-31",
          id: 100,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "2633314.45",
        },
        {
          created_at: "2022-12-31",
          id: 98,
          networking__cell_name: "08BSF",
          networking_id: 9,
          size: "1831921.02",
        },
      ],
      "65SCA": [
        {
          created_at: "2022-12-28",
          id: 84,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2875540.33",
        },
        {
          created_at: "2022-12-28",
          id: 75,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2130746.16",
        },
        {
          created_at: "2022-12-29",
          id: 80,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2923779.75",
        },
        {
          created_at: "2022-12-30",
          id: 90,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "1893874.55",
        },
        {
          created_at: "2022-12-30",
          id: 91,
          networking__cell_name: "65SCA",
          networking_id: 7,
          size: "2310176.88",
        },
      ],
      "43CSA": [
        {
          created_at: "2022-12-29",
          id: 82,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2034455.56",
        },
        {
          created_at: "2022-12-29",
          id: 83,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2707341.15",
        },
        {
          created_at: "2022-12-30",
          id: 92,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2347612.14",
        },
        {
          created_at: "2022-12-30",
          id: 96,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2872268.06",
        },
        {
          created_at: "2022-12-30",
          id: 95,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "1806397.08",
        },
        {
          created_at: "2022-12-31",
          id: 101,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2827167.01",
        },
        {
          created_at: "2022-12-31",
          id: 97,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2562444.42",
        },
        {
          created_at: "2023-01-01",
          id: 102,
          networking__cell_name: "43CSA",
          networking_id: 10,
          size: "2751877.60",
        },
      ],
      "54CAS": [
        {
          created_at: "2022-12-30",
          id: 94,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2336302.91",
        },
        {
          created_at: "2023-01-01",
          id: 103,
          networking__cell_name: "54CAS",
          networking_id: 6,
          size: "2266500.64",
        },
      ],
    },
  },
  header: ["34VDS", "08BSF", "65SCA", "43CSA", "54CAS"],
};

export function Home() {
  function formatDataChartCellByUserConnected(data: any, header: string[]) {
    const dates = Object.keys(data);
    const dataFormatted = [["Day", ...header]];

    for (const date of dates) {
      try {
        const aux = [date];

        for (const cell in data[date]) {
          aux.push(data[date][cell].length);
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
    const dataFormatted = [["Day", ...header]];

    for (const date of dates) {
      try {
        const aux = [date];

        for (const cell in data[date]) {
          aux.push(
            (
              data[date][cell].reduce((acc: number, cellInfo: any) => {
                return Number(cellInfo.size) + acc;
              }, 0) / Math.pow(10, 6)
            ).toFixed(3)
          );
        }

        dataFormatted.push(aux);
      } catch (e) {
        // console.log(e);
      }
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
            chartType="Bar"
            width="100%"
            height="400px"
            data={formatDataChartCellByUserConnected(data.results, data.header)}
            options={{
              chart: {
                title: "Users connected per cells",
                subtitle: "Quantity of connections of enodeb",
              },
            }}
          />
        </section>
        <section className="w-1/2 p-4 bg-white rounded-md">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={formatDataChartSizeConnection(data.results, data.header)}
            options={{
              chart: {
                title: "Size (MB) of connect each cells",
                subtitle: "Size quantity of connections cells per date",
              },
            }}
          />
        </section>
      </main>
    </div>
  );
}
