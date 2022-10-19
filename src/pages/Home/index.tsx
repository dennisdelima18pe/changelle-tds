import './style/index.scss';

const Home = ()=>{

    return (

      <div id="area-home"  data-testid="home">
        <main>
          <h1 id="title">WEATHER</h1>
          <h2 id='subTitle'>Select a city</h2>
          <img  id="image-world" src="assets/world.png" alt="World" />
          <div id="area-cities">
            <a href="/detail/dallol" className='city'>Dallol(NG)</a>
            <a href="/detail/fairbanks" className='city'>Fairbanks(US)</a>
            <a href="/detail/londres" className='city'>Londres(GB)</a>
            <a href="/detail/recife" className='city'>Recife(BR)</a>
            <a href="/detail/vancouver" className='city'>Vancouver(CA)</a>
            <a href="/detail/yakutsk" className='city'>Yakutsk(RU)</a>
          </div>
        </main>
      </div>
    )
}
export default Home