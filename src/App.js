import './App.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Home/Banner/Banner';
import TopNews from './Components/Home/TopNews/TopNews';
import New from './Components/Home/TopNews/New';
import Shorboshesh from './Components/Home/Shorboshesh/Shorboshesh';
import Footer from './Components/Home/Footer/Footer';
import Shorbosheshslider from './Components/Home/Shorbosheshslider/Shorbosheshslider';
import VideoShongbad from './Components/Home/VideoShongbad/VideoShongbad';
import Binodon from './Components/Home/Binodon/Binodon';
import Aro from './Components/Home/Aro/Aro';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      {/* <New></New> */}
      <TopNews></TopNews>
      <Shorboshesh></Shorboshesh>
      <Shorbosheshslider></Shorbosheshslider>
      <VideoShongbad></VideoShongbad>
      <Binodon></Binodon>
      <Aro></Aro>
      <Footer></Footer>
    </div>
  );
}

export default App;
