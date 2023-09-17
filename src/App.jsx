import './App.css';
import Cards from './components/Cards';

const App = () => {

  return (
    <div className="App">
            
            
        <div className="box">
            <img className="cent" src='/awning.png' ></img>
            <h1 className='txt'>Food Truck Favorites</h1>
          <div className = "box1">
              <Cards title='Birria-Landia' info='Mexican' src='/crd1.webp' link='https://thebirrialandia.com/menu/'/>
              <Cards title='The Halal Guys' info='Middle Eastern' src= '/crd2.jpg' link='https://thehalalguys.com/menu/'/>
              <Cards title='Mesob' info='Ethiopian' src='/crd3.jpg' link='https://www.mesobcafe.com/' />
              <Cards title='Mama Rocks' info='Kenyan' src='/crd4.jpg' link='https://www.mamarocksburgers.com/'/>
              <Cards title='King Souvlaki of Astoria' info='Greek' src= '/crd5.jpg' link='https://kingsouvlakinyc.com/'/>
              <Cards title='Makina Cafe' info='Ethiopian' src='/crd6.jpg' link='https://makinacafenyc.com/'/>
              <Cards title="Ling's Sweet Mini Cakes" info='Chinese' src='/crd7.jpg' link='https://canalstreet.market/'/>
              <Cards title='Jerk Pan' info='Jamaican' src= '/crd8.jpg' link='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/' />
              <Cards title="Mom's Mono" info='Tibetan' src='/crd9.jpg' link='https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/' />
              <Cards title='Patacon Pisao' info='Venezuelan' src='/crd10.jpg' link='https://www.pataconpisaonyc.com/menus/' />
              <Cards title='NY Dosas' info='Vegetarian' src= '/crd11.jpg' link='https://nydosas.com/menu/'/>
              <Cards title='Tong' info='Bangladeshi' src='/crd12.jpg' link='https://www.facebook.com/Bangladeshistreetfoods/'/>
          </div>
        </div>
      
    </div>
  )
}

export default App