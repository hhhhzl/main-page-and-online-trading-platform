import { apiSymbolsAllForSearch } from "api/trading_platform/market";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamAgreeProcessCreate from "components/Competition/TeamRegister/TeamAgreeProcessCreate";
import TeamAgreeProcessJoin from "components/Competition/TeamRegister/TeamAgreeProcessJoin";
import TeamEntry from "components/Competition/TeamRegister/TeamEntry";
import Chat from "pages/Chat";
import CompetitionViewforPublic from "pages/CompetitionViewforPublic";
import InformationEdit from "pages/InformationEdit";
import InvestNotes from "pages/InvestNotes";
import MarketView from "pages/MarketView";
import Picking from "pages/Picking";
import Ranking from "pages/Ranking";
import TeamInfo from "pages/TeamInfo";
import TradePro from "pages/TradePro";
import TradeSimple from "pages/TradeSimple";
import UserProfile from "pages/UserProfile";
import UserSummary from "pages/UserSummary";
// import './assets/font/font.css';
import { React, useEffect, useState } from "react";
import {
  Redirect, Route, Switch
} from "react-router-dom";
import PrivateCompetitionRoute from "utils/PrivateCompetitionRoute";
import PrivateRegisterForCompetition from "utils/PrivateRegisterForCompetition";
import "./App.css";
import TradePadmin from "./components/Admin/TradeingPlatformInterface";
import MainPage from "./components/MainPage/MainPage";
import Tournament from './components/Tournament/tournament';
import LoginMainLayout from "./components/webpage/RegisterLogin/mainLayout";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import PrivateRoute from "./utils/PrivateRoute";




const HomePage = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

const RedirectComponent = (to) => {
  return () => <Redirect to={to} />;
};

const MakeRouter = () => {
  const [searchData, setsearcnData] = useState([])
  // const dispatch = useDispatch();
  // const token = useSelector(selectAuthToken);
  // const userInfo = useSelector(selectAuthUserProfile);
  // const userType = userInfo ? userInfo.user_type : null;

  // // if (!token) {
  // //   return <MainPage/>
  // // }

  // useEffect(() => {
  //   if (token && !userInfo) {
  //     dispatch(getTokenProfile())
  //   }
  // }, [dispatch, token, userInfo])

  // let userRouteMap = {
  //   A: <AdminMainPage />,
  //   U: <UserMainPage />,
  // };

  // console.log(userType);
  // let userRoute = userInfo ? userRouteMap[userType] : <Route path='/' component={MainPage} />;
  // console.log(userRoute);


  useEffect(() => {
    getSearchData()
  },[])

const getSearchData = async (props) => {
  try{
    const response = await apiSymbolsAllForSearch()
    let Searchdata = response.data.data
    setsearcnData(Searchdata)
  }catch (err) {
    console.log(err)
  }
};


  return (
    <Route>
    <Switch>
      <AuthProvider>

        <Route exact path="/register" component={LoginMainLayout} />
        <Route exact path="/login" component={LoginMainLayout} />
        {/* <Route exact path="/Vlogin" component={LoginMainLayout} /> */}
        <Route exact path="/forgetpassword" component={LoginMainLayout} />
        <Route exact path="/changepassword" component={LoginMainLayout} />
        <Route exact path="/home" component={RedirectComponent("/")} />
        <Route exact path="/" component={MainPage} />
        

        {/* ////////// */}
        <PrivateRegisterForCompetition exact path="/team/register" component={TeamEntry} />
        <Route exact path="/team/create" component={TeamAgreeProcessCreate} />
        <Route exact path="/team/join" component={TeamAgreeProcessJoin} />
        <Route exact path="/tournament" component={Tournament} />
        <Route exact path="/tournament/" component={RedirectComponent("/tournament")} />
        <Route exact path="/competitionReview" component={CompetitionViewforPublic} />
        




        <PrivateRoute exact path="/chat">
          <Chat searchData = {searchData}/>
        </PrivateRoute>
        <PrivateRoute exact path="/personalEdit">
          <InformationEdit searchData = {searchData}/>
        </PrivateRoute>
        <PrivateRoute exact path="/personal">
          <UserProfile searchData = {searchData}/>
        </PrivateRoute>
        <PrivateRoute exact path="/team">
          <TeamInfo searchData = {searchData}/>
        </PrivateRoute>




{/* ///////////////////////////////////////////////////////////////////交易平台 */}
        <PrivateRoute
          exact
          path="/eplatform"
          component={RedirectComponent("/eplatform/summary")}
        />
        <PrivateRoute
          exact
          path="/eplatform/summary">
            <UserSummary searchData = {searchData}/>
        </PrivateRoute>

        <PrivateRoute exact path="/eplatform/trade">
          <TradeSimple searchData = {searchData}/>
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/eplatform/trade/pro"
        >
        <TradePro searchData = {searchData}/>
        </PrivateRoute>

        <PrivateRoute exact path="/eplatform/market">
        <MarketView searchData = {searchData}/>
        </PrivateRoute>

        <PrivateRoute exact path="/eplatform/picking">
        <Picking searchData = {searchData}/>
        </PrivateRoute>

        <PrivateRoute exact path="/eplatform/ranking">
        <Ranking searchData = {searchData}/>
        </PrivateRoute>


        <PrivateRoute
          exact
          path="/eplatform/invest_notes"

        >
          <InvestNotes searchData = {searchData}/>
        </PrivateRoute>

{/* ///////////////////////////////////////////////////////////////////////////赛事平台 */}
        <PrivateCompetitionRoute
          exact
          path="/competition"
          component={RedirectComponent("/competition/summary")}
        />
        <PrivateCompetitionRoute
          exact
          path="/competition/summary">
            <UserSummary searchData = {searchData}/>
        </PrivateCompetitionRoute>

        <PrivateCompetitionRoute exact path="/competition/trade">
          <TradeSimple searchData = {searchData}/>
        </PrivateCompetitionRoute>
        <PrivateCompetitionRoute
          exact
          path="/competition/trade/pro"
        >
        <TradePro searchData = {searchData}/>
        </PrivateCompetitionRoute>

        <PrivateCompetitionRoute exact path="/competition/market">
        <MarketView searchData = {searchData}/>
        </PrivateCompetitionRoute>

        <PrivateCompetitionRoute exact path="/competition/picking">
        <Picking searchData = {searchData}/>
        </PrivateCompetitionRoute>

        <PrivateRoute exact path="/competition/ranking">
        <Ranking searchData = {searchData}/>
        </PrivateRoute>


        <PrivateCompetitionRoute
          exact
          path="/competition/invest_notes"

        >
          <InvestNotes searchData = {searchData}/>
        </PrivateCompetitionRoute>

        <PrivateRoute
          exact
          path="/oiashdypiaDASneWRFOA/admin"
          component={TradePadmin}
        />
      </AuthProvider>
    </Switch>
    </Route>
  );
};

function App() {
  return <>{MakeRouter()}</>;
}

export default App;
