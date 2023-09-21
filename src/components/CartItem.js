import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlices";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">

      <div className="max-w-full-content">

        <div className="flex justify-center items-center">
          <img className="h-[280px] w-[200px]" src={item.image} />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>
          <div>
            <p className="text-green-600 text-[20px] font-semibold">{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase className="text-[40px]"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
