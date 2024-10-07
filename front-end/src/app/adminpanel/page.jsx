"use client";
export default function Home({ url }) {
  return (
    <div className="w-full flex justify-center">
      <div className="container flex justify-between items-center h-[100px] bg-green-200 p-2 rounded-[20px]">
        <h1>Shopping Mall</h1>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add product
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
                <button className="btn">Add</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
