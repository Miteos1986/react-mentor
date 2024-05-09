import Card from "./Card";
import Product  from "./Product";
import users from "../users.json"


function App() {
  // console.log('users', users)
  return (
   
    <>
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
<div>
  {users.map ((el)=>
{
  return <Card key={el.id} name={el.name} email={el.email} phone={el.phone} address={el.address} />
}  
)
  } 
</div>
   
    </>
  );
}







export default App



