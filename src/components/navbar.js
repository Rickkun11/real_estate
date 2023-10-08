import Image from "next/image"

export default function Nav() {
    return (
        <div className="w-100 h-36">
            <navbar className='flex min-h-screen flex-row items-start justify-between p-10'>
                <div className='Navigation-1 flex flex-row'>
                    <Image src="/logo.png" width={'200'} height={200} alt="Logo Author" className="pr-10"/>
                    <ul className="flex list-none flex-row justify-between gap-10 text-xl pt-2 max-sm:hidden max-md:hidden">
                        <li>Home</li>
                        <li>Rent</li>
                        <li>Sell</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='Navigation-1 flex flex-row justify-between gap-10 max-sm:hidden max-md:hidden max-lg:hidden'>
                    <ul className="flex list-none flex-row text-xl self-center">
                        <li>Log in</li>
                    </ul>
                    <button name="submit" className="bg-black text-white p-4 px-6 py-2 text-l rounded-lg">Create Account</button>
                </div>
                <div class="mt-2 space-y-2 hidden max-sm:block max-md:block max-lg:block">
                    <span class="block w-8 h-1 bg-gray-600"></span>
                    <span class="block w-8 h-1 bg-gray-600"></span>
                    <span class="block w-8 h-1 bg-gray-600"></span>
                </div>
            </navbar>

        </div>
    );
}