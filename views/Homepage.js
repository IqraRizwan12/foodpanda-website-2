import { useNavigate } from 'react-router-dom'

function Homepage(){
    const navigate = useNavigate()
    return <div>
     <div style={{display:'flex',fontSize:'x-large',marginLeft:'20px',justifyContent:'center',marginTop:'20px',color:'black'}}>
    <h2>It's the food and groceries you love, delivered</h2>   
    <img width={500} src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264"/>
    </div>
    <h2 style={{marginLeft:'15px'}}>Find us in these cities and many more!</h2>
    <div style={{display:'flex'}}>
        <div style={{border:'1px solid grey', width:'33%',marginRight:'10px',marginLeft:'10px'}}>
            <img width='100%' height={300} src="https://content.r9cdn.net/rimg/dimg/0c/7a/5a0aa493-city-33609-164cd9b7bd8.jpg?crop=true&width=1366&height=768&xhint=1527&yhint=1188"/><br/>
            <button style={{width:'150px',padding:'10px',fontSize:'20px',marginLeft:'110px',borderRadius:'10px',marginBottom:'10px'}} onClick={()=> navigate('/dashboard')}>Islamabad</button>
        </div>
        <div style={{border:'1px solid grey', width:'33%',marginRight:'10px'}}>
            <img width='100%' height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jinnah_Mausoleum.JPG/375px-Jinnah_Mausoleum.JPG"/><br/>
            <button style={{width:'150px',padding:'10px',fontSize:'20px',marginLeft:'110px',borderRadius:'10px',marginBottom:'10px'}} onClick={()=> navigate('/dashboard')}>Karachi</button>
        </div>
        <div style={{border:'1px solid grey', width:'33%',marginRight:'10px'}}>
            <img width='100%' height={300} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/dd/lahore.jpg?w=1400&h=900&s=1"/><br/>
            <button style={{width:'150px',padding:'10px',fontSize:'20px',marginLeft:'110px',borderRadius:'10px',marginBottom:'10px'}} onClick={()=> navigate('/dashboard')}>Lahore</button>
        </div>
      
    </div>
    </div>
    
    
}
export default Homepage