import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import { BrowserRouter } from "react-router-dom";
import BitCoinGraph from "./components/BitCoinGraph";
import About from "./components/About";
import Card from "./components/Card";
import './App.css'
import Perfomance from "./components/Perfomance";
import Fundamentals from "./components/Fundamentals";
import Tekenomics from './components/Tekenomics'
import Team from './components/Team'
import FeaturedLike from "./components/FeaturedLike";
import asideImg from './assets/images/aside_img.png'
import TopTrending from "./components/TopTrending";

function App() {
  function removeClasses(e){
    const li = document.querySelectorAll('.tabs button')
    li.forEach(list=>{
      if(list.classList.contains('active__tab')){
        list.classList.remove('active__tab')
      }
    })
    e.target.classList.add('active__tab')
  }

  return<BrowserRouter>
    <Header/>
    <main>
      <div className="main__content">
      <BreadCrumbs />
      <BitCoinGraph/>
     
      <article class='feature-1'>
        <ul className="tabs" >
          <li><button  className="active__tab" onClick={(e)=>removeClasses(e)}>Overview</button></li>
          <li><button onClick={(e)=>removeClasses(e)}>Fundamentals</button></li>
          <li><button onClick={(e)=>removeClasses(e)}>News Insights</button></li>
          <li><button onClick={(e)=>removeClasses(e)}>Sentiments</button></li>
          <li><button onClick={(e)=>removeClasses(e)}>Team</button></li>
          <li><button onClick={(e)=>removeClasses(e)}>Technicals</button></li>
          <li><button onClick={(e)=>removeClasses(e)}>Tokenomics</button></li>
        </ul>
        <Card className="tab-details">
          <h2>Performance</h2>
          <Perfomance labelLow="Today's Low" labelHigh="Today's High" pointer='$48,637.83' lowValue='46,930.22' highValue='49,343.83' />
          <Perfomance labelLow="52W Low" labelHigh="52W High" lowValue='16,930.22' highValue='49,743.83' />
          <Fundamentals/>
        </Card>
      </article>
      

      <About/>
      <Tekenomics/>
      <Team/>
      </div>
      
      <aside>
        <div className="aside__container">
          <h2>Get started with Koinx for FREE</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere, enim maiores nesciunt rem nisi. Qui aperiam molestias mollitia.</p>
          <img src={asideImg} alt="" />
          <button className="aside__btn">
            Get started for free
          </button>
        </div>
        <TopTrending/>
      </aside>
    </main>
    
    <footer>
      <FeaturedLike/> 
    </footer>
    
  </BrowserRouter>
  
}

export default App;
