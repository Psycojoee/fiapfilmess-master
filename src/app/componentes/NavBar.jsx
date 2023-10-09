"use client"

import { serverLogout } from "@/actions/auth.js";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } =  useRouter ()

    function logout (){
        serverLogout ()
        push("/login")
      }

    return (
        <nav className='bg-black-500 text-neutral-900 p-2 flex gap-3 items-end'>
        <Link href="/">
            <h1 className='holtwood one sc font-bold'>SANOFI</h1>
        </Link>
        <button onClick={logout}>logout</button>
       </nav>
    )
}