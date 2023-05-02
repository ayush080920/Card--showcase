function Profilecards({Title,Handle,image,description}){
    //const Title=props.title
    //const Handle=props.Handle
    return(<div className="card">
<div className="card-image">
<figure className="image is-4by3">
<img src={image} alt="logo" /></figure>
</div>
<div className="card-content">
<div className="media-content">
         <p className="title is-4">{Title}</p>
    
    <p className="subtitle is-6">{Handle}</p> 

    <p className="subtitle is-6">{description}</p> 
    </div>
    </div>
   
    </div>
    )
}
export default Profilecards