const EXPENSE_BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const expenseAPI = async () => {
  const response = await fetch(EXPENSE_BASE_URL);
  const expenseResponse = await response.json();

  return expenseResponse;
};

export default expenseAPI;
