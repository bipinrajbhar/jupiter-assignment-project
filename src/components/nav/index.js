import { Link } from "preact-router/match";
import { useState } from "preact/hooks";

const Nav = ({ open }) => {
  const [profileSubMenu, setProfileSubMenu] = useState(true);
  const [myTaskSubMenu, setTaskSubMenu] = useState(true);

  return (
    <nav
      class={`fixed t-0 l-0 w-64 mt-20 z-10 ${
        open ? "visible" : "invisible md:visible"
      }`}
    >
      <ul class="container flex flex-col p-4 bg-white border-r-2 border-gray-900 h-screen">
        <li>
          <Link
            class=" block my-2 p-2 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:bg-gray-300 transition duration-200 outline-none cursor-pointer"
            onClick={() => setProfileSubMenu(!profileSubMenu)}
          >
            Profile
          </Link>
          <ul class={`${profileSubMenu && "hidden"}`}>
            <li>
              <Link
                class=" block ml-4 my-2 p-2 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:bg-gray-300 transition duration-200 outline-none"
                activeClassName="bg-gray-900 text-white"
                href="/settings"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                class=" block ml-4 my-2 p-2 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:bg-gray-300 transition duration-200 outline-none"
                activeClassName="bg-gray-900 text-white"
                href="/notification"
              >
                Notification
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            class=" block my-2 p-2 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:bg-gray-300 transition duration-200 outline-none cursor-pointer"
            onClick={() => setTaskSubMenu(!myTaskSubMenu)}
          >
            My Tasks
          </Link>
          <ul class={`${myTaskSubMenu && "hidden"}`}>
            <li>
              <Link
                class=" block ml-4 my-2 p-2 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:bg-gray-300 transition duration-200 outline-none"
                activeClassName="bg-gray-900 text-white"
                href="/task1"
              >
                Task 1
              </Link>
            </li>
            <li>
              <Link
                class=" block ml-4 my-2 p-2 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:bg-gray-300 transition duration-200 outline-none"
                activeClassName="bg-gray-900 text-white"
                href=""
              >
                Task 2
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
