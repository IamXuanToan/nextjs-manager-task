import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="text-center">Chào mừng ...</h1>
            <Link href={"/task"} className="hover:text-red-500">
                Vào Task
            </Link>
            <Link href={"/login"} className="hover:text-red-500">
                Vào login
            </Link>
            <Link href={"/register"} className="hover:text-red-500">
                Vào đăng ký
            </Link>
        </div>
    );
}
