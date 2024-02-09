import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Team from './pages/team/Team.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Form from './pages/form/Form.jsx';
import Calendar from './pages/calendar/Calendar.jsx';
import Faq from './pages/faq/Faq.jsx';
import Bar from './pages/bar/Bar.jsx';
import Pie from './pages/pie/Pie.jsx';
import Line from './pages/line/Line.jsx';
import Geography from './pages/geography/Geography.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route  path="team" element={<Team />} />
      <Route  path="contacts" element={<Contacts />} />
      <Route  path="invoices" element={<Invoices />} />
      <Route  path="form" element={<Form />} />
      <Route  path="calendar" element={<Calendar />} />
      <Route  path="faq" element={<Faq />} />
      <Route  path="bar" element={<Bar />} />
      <Route  path="pie" element={<Pie />} />
      <Route  path="line" element={<Line />} />
      <Route  path="geography" element={<Geography />} />




      






    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
