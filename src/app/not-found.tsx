import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2 className=" text-xl text-red-600 font-bold">
                Error-404
            </h2>
            <p>The page you are looking for does not exist</p>
            <Link href="/">Return home</Link>
        </div>
    );
}

export default NotFound;