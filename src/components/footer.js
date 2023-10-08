import Image from "next/image"

export default function Footer() {
    return (
        <>
        < div className = "" >
        <section className="flex flex-row text-gray-400 bg-slate-950 min-h-5xl">
            <div className="flex flex-col mx-auto px-4 py-16 lg:flex justify-start">
                <Image src="/logo-white.png" width={200} height={200} alt="Logo Author" className="justify-start"/>
                <span className="mb-6">Investing Your Future One Home At A Time</span>
                <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                    <input
                        type="email"
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        required
                    />
                    <button
                        className="!absolute right-1 top-1 z-10 select-none rounded bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold bg-blue text-white shadow-md shadow-blue-500/20 transition-all"
                        type="button"
                        data-ripple-light="true"
                    >
                        Subscribe
                    </button>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Enter Your Email
                    </label>
                    </div>
            </div>

            <div className="flex flex-col mx-auto px-4 py-24 lg:flex justify-start gap-3 ">
                <span className="text-white text-l font-extrabold">Quick Menu</span>

                <span>Home</span>
                <span>Rent</span>
                <span>Sell</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <div className="flex flex-col mx-auto px-4 py-24 lg:flex justify-start gap-3 ">
                <span className="text-white text-l font-extrabold" >About Us</span>

                <span>Payment Plans</span>
                <span>Make Saving More</span>
                <span>Tax Calculator</span>
                <span>Talk To Us</span>
            </div>
            <div className="flex flex-col mx-auto px-4 py-24 lg:flex justify-start gap-3 ">
                <span className="text-white text-l font-extrabold">Contact Info</span>

                <span>123 Main Street, Apt 4B Los Angeles, CA 90001, USA</span>
                <span>+088 123 456-78-91</span>
                <span>Company@gmail.com</span>
            </div>
        </section>
    </div>
</>
    );
}