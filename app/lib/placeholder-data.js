// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Nam Nguyen',
    email: 'nam@saskpolytech.ca',
    password: 'saskpolytech',
    image_url: '/users/nam-nguyen.png'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Tai Nguyen',
    email: 'tai@saskpolytech.ca',
    password: 'saskpolytech',
    image_url: '/users/tai-nguyen.png'
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Hieu Nguyen',
    email: 'hieu@saskpolytech.ca',
    password: 'saskpolytech',
    image_url: '/users/hieu-nguyen.png'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Lanny Mcdonald',
    email: 'lanny@gmail.com',
    password: 'saskpolytech',
    image_url: '/users/lanny-mcdonald.png'
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Tai Nguyen',
    email: 'tai@saskpolytech.ca',
    image_url: '/customers/tai-nguyen.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Hieu Nguyen',
    email: 'hieu@saskpolytech.ca',
    image_url: '/customers/hieu-nguyen.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Nam Nguyen',
    email: 'nam@saskpolytech.ca',
    image_url: '/customers/nam-nguyen.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Lanny Mcdonald',
    email: 'lanny@gmail.com',
    image_url: '/customers/lanny-mcdonald.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2024-03-06',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2024-03-14',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[3].id,
    amount: 3040,
    status: 'paid',
    date: '2024-02-29',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[2].id,
    amount: 44800,
    status: 'paid',
    date: '2024-02-10',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[1].id,
    amount: 34577,
    status: 'pending',
    date: '2024-03-05',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2024-02-16',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[3].id,
    amount: 666,
    status: 'pending',
    date: '2024-02-27',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2024-03-09',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[0].id,
    amount: 1250,
    status: 'paid',
    date: '2024-02-17',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[3].id,
    amount: 8546,
    status: 'paid',
    date: '2024-02-07',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[2].id,
    amount: 500,
    status: 'paid',
    date: '2024-02-19',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[1].id,
    amount: 8945,
    status: 'paid',
    date: '2024-02-03',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2024-03-18',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2024-02-04',
    image_url: '/invoices/invoice.png'
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2024-02-05',
    image_url: '/invoices/invoice.png'
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
