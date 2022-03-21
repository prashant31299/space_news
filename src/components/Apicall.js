
function Apicall(props){
    const {id,title,image,summery,publish,url } =props
    return (
        <div className=" space">
                <div className="spacenews"onClick={()=>{
                    window.location.href=url
                }} >

            <h4 >{id}</h4>
            <h5>{title}</h5>
            <img src={image}/>
            <p>{summery}</p>
            <h5>{publish}</h5>


                </div>

        

        </div>

    )
    
}

export default Apicall