import './App.css' ;
import myWonderfulImage from "./myimage.jpg" ;
import './style.css';

function App()
{
  return (
    <div className="App">
        <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">My Name Is Wided Chedly</h1>

    <img src="/myimage.jpg"  /> 
  
    <img src = {myWonderfulImage} alt ='myimage' /> 
  </div>
  <div align="center">
        <iframe width="727" height="409" src="https://www.youtube.com/embed/gCriX3nVtRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
</>

  
    </div>
  );
}

export default App;
