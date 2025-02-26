import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../redux/slice/cartSlice";
import BgImage from "../assets/common/Frame.png";
import { Title, BodyOne } from "../components/common/CustomComponents";

export const CartPage = () => {
	const cartItems = useSelector((state) => state.cart.itemList);
	const totalPrice = useSelector(selectTotalPrice);
	const dispatch = useDispatch();

	return <>
		<section className="mt-16">
			<div className="h-[50vh]">
				<div className="images absolute top-0 left-0 w-full h-1/2">
					<img className="w-full h-full object-cover" src={BgImage} alt="" />
				</div>
				<div className="text absolute top-48 left-[45%]">
					<Title level={1}>Cart</Title>
				</div>
			</div>
		</section>
	</>
} 