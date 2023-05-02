import "bulma/css/bulma.css"
import Profilecards from './profilecard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
  return(

    <div>
      <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">Personal Digital Assistant </p>
      </div>
      </section>
<div className="container">
     <section className="section">
     <div className="columns">
     <div className="column is-4">
     <Profilecards Title="Alexa" Handle="@alexa99" image={AlexaImage} description="Alexa is made by amazon"   />
     </div>
     <div className="column is-4">
     <Profilecards Title="Cortona" Handle="@siri32"image={CortanaImage} description="Cortana is made my microsoft" />
     </div>
     <div className="column is-4">
     <Profilecards Title="Siri" Handle="@siri01" image={SiriImage} description="Siri is made by apple"/>
     </div>
      
     </div>
     </section>  
     </div>
      </div>
  )
}
export default App;