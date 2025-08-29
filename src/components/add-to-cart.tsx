import {addItemToCart} from "../stores/cart.ts";

export const AddToCart = ({item}: { item: ShopItem }) => {
    return (
        <button className="big-link" onClick={() => addItemToCart(item)}>
            Add to Cart
        </button>
    )
}
