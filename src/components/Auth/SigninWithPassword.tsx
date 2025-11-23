"use client";
import { EmailIcon, PasswordIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SigninWithPassword() {
  const [data, setData] = useState({
    email: process.env.NEXT_PUBLIC_DEMO_USER_MAIL || "",
    password: process.env.NEXT_PUBLIC_DEMO_USER_PASS || "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // You can remove this code block
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block font-medium text-dark dark:text-white">
          Email
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-dark-5">
            <EmailIcon />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-stroke bg-white py-[15px] pl-10 pr-3 outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium text-dark dark:text-white">
          Password
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-dark-5">
            <PasswordIcon />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-stroke bg-white py-[15px] pl-10 pr-3 outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
          />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={data.remember}
            onChange={(e) =>
              setData({ ...data, remember: e.target.checked })
            }
            className="size-4 rounded border-stroke text-primary focus:ring-0 dark:border-dark-3"
          />
          <span className="text-dark-5 dark:text-dark-6">Remember me</span>
        </label>

        <Link
          href="/auth/forgot-password"
          className="hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          Sign In
          {loading && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-primary dark:border-t-transparent" />
          )}
        </button>
      </div>
    </form>
  );
}
