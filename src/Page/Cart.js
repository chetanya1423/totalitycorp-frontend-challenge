import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";



const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="flex justify-center items-center  ">
      {
        cart.length > 0 ?
          (<div className="flex flex-col gap-x-11 firstclass">

            <div className=" flex flex-col w-[100%] h-[500px] items-center justify-between 
     transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline totalprize">

              <div className="flex flex-col justify-center items-center gap-y-5">
                <div className="text-gray-700 font-semibold text-[35px]" >Your Cart</div>
                <div className="text-[20px] mt-[40px]">Summary</div>
                <p className="text-[20px]">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-[17px] gap-y-5">
                <p className="text-[20px]">Total Amount: ${totalAmount}</p>
                <button className="border-4 p-3 rounded-md border-green-500 font-bold text-gray-700 bg-green-500">
                  CheckOut Now
                </button>
              </div>

            </div>


            <div className="flex flex-col grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>




          </div>) :
          (<div className="flex flex-col justify-center items-center gap-y-5 my-auto">
            <h1 className="text-gray-700 font-semibold text-[35px]" >Cart Empty</h1>
            <Link to={"/"}>
              <button className="border-4 p-3 rounded-md border-green-500 font-bold text-gray-700 bg-green-500">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;