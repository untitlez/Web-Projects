"use client";

import { useAction } from "@/app/lib/store/admin";
import { imageItems } from "@/app/lib/constant/admin/form";

export const UserImage = ({ user }) => {
  const { edit, select, setSelect } = useAction();

  const onChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="flex lg:flex-col justify-center items-center gap-8 my-12">
      {/* Avatar Image  */}
      <div className="avatar">
        <div className="h-36 w-36 lg:h-56 lg:w-56 rounded-full shadow-xl">
          <img
            alt="profile images"
            src={select || user?.image || "/profile-icon.png"}
          />
        </div>
      </div>

      {/* Avatar List  */}
      <div className="dropdown dropdown-end lg:dropdown-right">
        {edit ? (
          <button tabIndex={0} type="button" role="button" className="btn">
            Change Image
          </button>
        ) : (
          ""
        )}
        <ul
          tabIndex={0}
          className="z-[1] dropdown-content rounded-xl border border-base-content/75 bg-base-100
            flex flex-wrap justify-center gap-4 py-4 mt-2 lg:ml-2 w-80 lg:w-[440px]"
        >
          {imageItems.map((avatar, i) => (
            <li key={i}>
              <input
                name="image"
                type="radio"
                className="hidden peer"
                id={avatar.id}
                value={avatar.src}
                onChange={onChange}
              />
              <label
                className="block cursor-pointer border-4 border-transparent peer-checked:border-base-content rounded-full"
                htmlFor={avatar.id}
              >
                <img
                  className="w-20 h-20 rounded-full"
                  src={avatar.src}
                  alt={avatar.alt}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
