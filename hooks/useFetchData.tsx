import { useEffect, useState } from "react";

import { InfosPagesData } from "@/interfaces/infosPagesData";

export function useFetchData() {
  const [data, setData] = useState<InfosPagesData | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch("/infos/data.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const jsonData: InfosPagesData = await response.json();

        if (isMounted) {
          setData(jsonData);
        }
        console.log("Fetched data:", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
