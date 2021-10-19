// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const EXPENSE_API = 'EXPENSE_API';

export const emailUser = (email) => ({
  type: USER_EMAIL,
  email,
});

export const expenseAPI = (expense) => ({
  type: EXPENSE_API,
  expense,
});
