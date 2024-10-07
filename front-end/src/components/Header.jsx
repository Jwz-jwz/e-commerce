import { Cart } from "@/svg/Cart";

export const Header = ({ url }) => {
  return (
    <div
      className="h-[100px] rounded-[20px] flex justify-between
     items-center p-2"
    >
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Product List
        </option>
        <option>All</option>
        <option>T-shirts</option>
        <option>Outer</option>
        <option>Shoes</option>
        <option>Pants</option>
      </select>

      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add new product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New product details</h3>
          <p className="py-4">Name:{}</p>
          <p className="py-4">Description:{}</p>
          <p className="py-4">Price:{}</p>
          <img src={url} alt="" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Add</button>
            </form>
          </div>
        </div>
      </dialog>
      <button className="btn w-[50px] flex">
        <Cart />
      </button>
    </div>
  );
};
