import { format } from 'date-fns';

export type StockDataItem = {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type ApiResponse = {
  symbol: string;
  data: StockDataItem[];
};

const API_URL = "https://mock.apidog.com/m1/892843-874692-default/marketdata/history/AAPL";

export async function fetchStockData(): Promise<StockDataItem[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json: ApiResponse = await response.json();
    // Format timestamps here
    const formattedData = json.data.map((d) => {
      const date = new Date(Number(d.timestamp) * 1000);
      return {
        ...d,
        date: format(date, "dd/MM/yy"),
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Failed to fetch stock data:", error);
    throw error;
  }
}

