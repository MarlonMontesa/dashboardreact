import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar/Calendar";
import TreloBoard from "./pages/TrelloBoard/TreloBoard";
const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="treloboard" element={<TreloBoard/>}/>
          <Route path="users" element={<TreloBoard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Dashboard/>
  </div>
};

export default App;
