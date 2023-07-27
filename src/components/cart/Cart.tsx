import Button from "../../micro/button/Button";
import Store from "../../store/Store";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";

type PaystackProps = {
  reference: string;
  email: string;
  amount: number;
  publicKey: any;
};


const Cart = () => {
  const { cartArray, removeFromCart } = Store();
  const totalPrice = cartArray.reduce(
    (acc: number, curr) => acc + Number(curr.price),
    0
  );

  const billings = {
    tax: 3.5,
    shipping: 15,
    discount: 5,
    total: totalPrice,
  };

  
  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: "Fasco@gmail.com",
    amount: (Math.round(billings.tax + billings.total + billings.shipping - billings.discount) * 80000),
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };
  
  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    toast.success("Payment successfully completed");
  };
  const onClose = () => {
    toast.error("Your payment was unsuccessful, please try again later!");
  };
  

  return (
    <main className="mx-auto container px-5 lg:px-10 pt-12 lg:pt-20">
      {cartArray.length === 0 ? (
        <div className="flex items-center flex-col text-center justify-center space-y-5">
          <h1 className="lg:text-6xl text-4xl sm:text-5xl font-bold text-secondary">
            Shopping Cart is <span className="text-primary">Empty</span>
          </h1>
          <p className="text-lg">
            Go to shop and add to cart product you'd like to buy.
          </p>
          <Link to="/">
            <Button className="animate-verticalBounce flex items-center p-3">
              <BiArrowBack className="mr-2" /> Return to Shop
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-5xl font-bold text-secondary">Shopping Cart</h1>
            <p className="py-4 font-medium text-base">
              There are{" "}
              <span className="font-medium text-primary">
                {cartArray.length} products{" "}
              </span>
              in your cart
            </p>
          </div>

          <section className="flex lg:flex-row flex-col justify-between py-10">
            <div className="lg:w-8/12 w-full">
              <table className="w-full">
                <thead className="">
                  <tr className=" pb-2 flex justify-between items-center">
                    <th className="w-1/4">Product</th>
                    <th className="w-1/4">Price</th>
                    <th className="w-1/4">Quantity</th>
                    <th className="w-1/4">Total</th>
                    <th className="w-1/4"></th>
                  </tr>
                  <hr />
                </thead>
                <tbody className="">
                  {cartArray.map((item) => (
                    <tr
                      key={item.id}
                      className=" border-b flex justify-between items-center py-5"
                    >
                      <td className="w-1/4 items-center justify-center border p-2 flex">
                        <img
                          src={item.image}
                          alt="fruit"
                          className="lg:w-28 lg:h-28 w-16 h-16 rounded-md "
                        />
                        {/* <div className="pl-2 first-letter:uppercase font-medium text-lg">
                      {item.fruit}
                    </div> */}
                      </td>
                      <td className="w-1/4 justify-center items-center text-lg flex">
                        <span className="font-medium">$</span>
                        {item.price}
                      </td>
                      <td className="w-1/4 justify-center flex">
                        <Button className="h-8 w-8">-</Button>
                        <span className="px-2">{item.quantity} </span>
                        <Button className="h-8 w-8">+</Button>
                      </td>
                      <td className="w-1/4 justify-center items-center text-lg flex">
                        <span className="font-medium">$</span>
                        {item.price * item.quantity}
                      </td>

                      <div
                        className="w-1/4 cursor-pointer justify-center items-center text-lg flex"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <RiDeleteBinLine />
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:w-4/12 border ml-4 my-8 rounded-md h-fit p-5">
              <div className="flex justify-between py-3">
                <h1 className="text-lg text-secondary font-semibold">
                  Sub Total:
                </h1>
                <p className="text-lg font-medium">${billings.total}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="text-lg text-secondary py-3 font-semibold">
                  Discount:
                </h1>
                <p className="text-lg font-medium">${billings.discount}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="text-lg text-secondary py-3 font-semibold">
                  Shipping Fee:
                </h1>
                <p className="text-lg font-medium">${billings.shipping}.00</p>
              </div>
              <div className="flex justify-between border-b py-3">
                <h1 className="text-lg text-secondary py-3 font-semibold">
                  Estimated Tax:
                </h1>
                <p className="text-lg font-medium">${billings.tax}.00</p>
              </div>
              <div className="flex justify-between py-3">
                <h1 className="text-lg text-secondary py-5 font-semibold">
                  Total:
                </h1>
                <p className="text-lg font-medium">
                  $
                  {Math.round(
                    billings.total +
                      billings.tax +
                      billings.shipping -
                      billings.discount
                  )}
                  .00
                </p>
              </div>
              <Button
                className="p-3 w-full"
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
              >
                Checkout
              </Button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Cart;
