import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

interface IBlog {
  title: string;
  img: string;
  img_profile: string;
  email: string;
  author: string;
  detail: string;
}

export const CardBlogs: React.FC<IBlog> = ({
  title,
  img,
  img_profile,
  author,
  email,
  detail,
}) => {
  return (
    <div data-cy="blog-item">
      <div className="card w-[30rem] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="rounded-t-lg w-[20rem] h-auto" src={`https:${img}`} />
        </figure>
        <div className="card-body">
          <h2 data-cy="blog-title" className="card-title">
            {title}
          </h2>
          <div className="flex gap-2">
            <img
              data-cy="blog-img"
              className="w-[3rem] rounded-full"
              src={`https:${img_profile}`}
            />
            <div className="flex flex-col">
              <p data-cy="blog-author">Author: {author}</p>
              <p>Email: {email}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link
              data-cy="blog-redirect"
              href={`/blog/${detail}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlogs;
