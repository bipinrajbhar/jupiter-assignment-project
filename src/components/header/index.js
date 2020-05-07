import { useState } from "preact/hooks";
import { Link } from "preact-router";
import { X, Menu } from "react-feather";
import Nav from "../nav";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <header class="fixed t-0 l-0 w-full p-4 border-b-2 border-gray-900 bg-white z-10 h-20">
        <Link class="flex items-center outline-none" href="">
          {open ? (
            <button
              class="visible md:invisible focus:outline-none p-2 hover:bg-gray-900 hover:text-white rounded-full transition duration-200"
              onClick={() => setOpen(!open)}
            >
              <X class="currentColor" />
            </button>
          ) : (
            <button
              class="visible md:invisible focus:outline-none p-2 hover:bg-gray-900 hover:text-white rounded-full transition duration-200"
              onClick={() => setOpen(!open)}
            >
              <Menu class="currentColor" />
            </button>
          )}
          <div class="ml-auto flex flex-col">
            <img
              class="block self-center rounded-full w-6 h-6"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--_B-hNNjU--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/356311/63c5090d-4e47-4a7a-b7c0-a49da9e24dfc.jpg"
            />
            <span class="font-sans block text-center text-sm m-1">Bipin</span>
          </div>
        </Link>
      </header>
      <Nav open={open} />
      {open && (
        <div class="fixed bg-gray-900 opacity-50 w-full h-full md:invisible"></div>
      )}
    </>
  );
};

export default Header;
