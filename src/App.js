//import logo from './logo.svg';
import { Suspense } from 'react';
import './App.css';
//import ImageSlider from './components/ImageSlider';
//import LoadMoreItems from './components/LoadMoreItems/LoadMoreItems';
//import TreeViewNaviationMenu from './components/TreeViewNavigationMenu';
//import QRCodeGenerator from './components/QRCodeGenerator';
//import LightDarkMode from './components/LightDarkMode';
//import ProgressBarIndicator from './components/ProgressBarIndicator';
//import Accordion from './components/Accordion';
//import RandomColor from './components/RandomColor';
//import StarRating from './components/StarRating';
//import SearchList from './components/SearchList';
import NumberFunctions from "./components/NumberFunctions";

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noStars={10}/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"}/> */}    
      
      {/* <TreeViewNaviationMenu/> */}
      {/* <SearchList/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      <Suspense fallback={<div>Loading....</div>}>
      {/* <ProgressBarIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      <NumberFunctions/>
      {/* <LoadMoreItems/> */}
      </Suspense>


  
    </div>
  );
}

export default App;
