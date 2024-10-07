import { Cart } from "@/svg/Cart";
import Link from "next/link";

export const Header = ({ url }) => {
  //   const router = useRouter();
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
      <Link href="/adminpanel">
        <button
          className="btn"
          //   onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Admin
        </button>
      </Link>
      <Link href="/mycart">
        <button className="btn w-[50px] flex">
          <Cart />
        </button>
      </Link>
    </div>
  );
};
