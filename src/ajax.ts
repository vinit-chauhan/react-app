const API_HOST = "http://192.168.2.72:3000";

export const fetchInitialDeals = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_HOST}/api/deals`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
