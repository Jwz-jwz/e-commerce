export const ProductCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-[20px]">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {}</h2>
        <p>Description: {}</p>
        <p>Price: {}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
};
