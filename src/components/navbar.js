import Image from "next/image"

export default function Nav() {
    return (
        <div className="w-100 h-36">
            <navbar className='flex min-h-screen flex-row items-start justify-between p-10'>
                <div className='Navigation-1 flex flex-row'>
                    <Image src="/logo.png" width={200} height={200} alt="Logo Author" className="pr-10"/>
                    <ul className="flex list-none flex-row justify-between gap-10 text-xl pt-2">
                        <li>Home</li>
                        <li>Rent</li>
                        <li>Sell</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='Navigation-1 flex flex-row justify-between gap-10 '>
                    <ul className="flex list-none flex-row text-xl pt-2">
                        <li>Log in</li>
                    </ul>
                    <button name="submit" className="bg-black text-white py-5 px-10 text-xl rounded-lg">Create Account</button>
                </div>

            </navbar>

        </div>
    );
}