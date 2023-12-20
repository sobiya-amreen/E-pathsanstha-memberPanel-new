import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ProfileSetting from './Component/ProfileSetting/ProfileSetting';
import Shares from './Component/Shares/Shares';
import MonthlyDeposite from './Component/MonthlyDeposite/MonthlyDeposite';
import Insurence from './Component/Insurence/Insurence';
import FdComponent from './Component/FdComponent/FdComponent';
import RdComponent from './Component/RdComponent/RdComponent';
import RegularLoan from './Component/RegularLoan/RegularLoan';
import EmergencyLoan from './Component/EmergencyLoan/EmergencyLoan';
import AnualReport from './Component/AnualReport/AnualReport';
import Notification from './Component/Notification/Notification';
 import TotalShareAmount from './Component/TotalShareAmount/TotalShareAmount';
import MonthyBalance from './Component/MonthlyBalance/MonthyBalance';
import DashboardInsurence from './Component/DashboardInsurence/DashboardInsurence';
import DashboardFD from './Component/DashboardFD/DashboardFD';
import DashboardRD from './Component/DashboardRD/DashboardRD';
import DashboardRegularLoan from './Component/DashboardRegularLoan/DashboardRegularLoan';
import DashboardEmergencyLoan from './Component/DashboardEmergencyLoan/DashboardEmergencyLoan';
import Login from './Component/Login/Login';
import TotalSharesChart from './Component/TotalSharesChart/TotalSharesChart';
import MonthlyDepositeChart from './Component/MonthlyDepositeChart/MonthlyDepositeChart';
import InsurenceChart from './Component/InsurenceChart/InsurenceChart';
import FDChart from './Component/FDChart/FDChart';
import RDChart from './Component/RDChart/RDChart';
import RegularLoanChart from './Component/RegularLoanChart/RegularLoanChart';
import EmergencyLoanChart from './Component/EmergencyLoanChart/EmergencyLoanChart';
import PieChart from './Component/PieChart/PieChart';
import { motion } from 'framer-motion';



function App(isOpen) {
  return (
    <div className="App"  >
       <motion.div animate={{width: isOpen ? "100%" :  "50%"}}>

      <div>
      
     

<Routes>


<Route path='/' element={<Dashboard/>}/>
<Route path='/login' element={<Login/>}/>


<Route path='/profilesetting' element={<ProfileSetting/>}/>
<Route path='/shares' element={<Shares/>}/>
<Route path='/monthlyDeposite' element={<MonthlyDeposite/>}/>
<Route path='/insurence' element={<Insurence/>}/>
<Route path='/fdcomponent' element={<FdComponent/>}/>
<Route path='/rdcomponent' element={<RdComponent/>}/>
<Route path='/regularloan' element={<RegularLoan/>}/>
<Route path='/emergencyLoan' element={<EmergencyLoan/>}/>
<Route path='/anualreport' element={<AnualReport/>}/>
<Route path='/notification' element={<Notification/>}/>
<Route path='/totalshareamount' element={<TotalShareAmount/>}/>
<Route path='/monthlybalance' element={<MonthyBalance/>}/>
<Route path='/dashboardinsurence' element={<DashboardInsurence/>}/>
<Route path='/dashboardfd' element={<DashboardFD/>}/>
<Route path='/dashboardrd' element={<DashboardRD/>}/>
<Route path='/dashboardregularloan' element={<DashboardRegularLoan/>}/>
<Route path='/dashboardemergencyloan' element={<DashboardEmergencyLoan/>}/>

<Route path='/totalsharechart' element={<TotalSharesChart/>}/>
<Route path='/monthlydepositechart' element={<MonthlyDepositeChart/>}/>
<Route path='/insurencechart' element={<InsurenceChart/>}/>
<Route path='/fdchart' element={<FDChart/>}/>
<Route path='/rdchart' element={<RDChart/>}/>
<Route path='/regularloanchart' element={<RegularLoanChart/>}/>
<Route path='/emergencyloanchart' element={<EmergencyLoanChart/>}/>
<Route path='/piechart' element={<PieChart/>}/>

</Routes>
</div>
</motion.div>
    </div>
  );
}

export default App;
