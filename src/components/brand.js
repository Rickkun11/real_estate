import Image from "next/image";

export default function Brand() {
    return (
    <>
        <Image src="/brand.png" width={1000} height={1000} alt="Brand Picture" className='flex item-center p-4 pl-7 text-start text-gray-400 rounded-[20px] mx-auto w-11/12 text-center gap-5'/>

        <section className="flex justify-start item-start p-16 text-start text-gray-400">

            <div className="mx-auto text-start self-center">
                <h1
                    className="bg-black bg-clip-text text-3xl text-transparent sm:text-4xl font-semibold">
                        Navigating Your
                    <span className="sm:block pt-3">
                        Real Estate Journey
                    </span>
                </h1>
                <p className="mx-auto mt-3 max-w-lg sm:text-lg/relaxed">
                    Look For An Agency With A Proven Track Record Of Success
                    In Buying, Selling, Or Renting Properties. You Want An
                    Agency That Has Been In The Industry For A While And Has
                    Experience Dealing With Various Types Of Properties.
                </p>
                <div className="mt-8 flex flex-wrap justify-start gap-4">
                    <a
                        className="block w-full rounded-[13px] px-10 py-3 bg-black text-sm font-medium text-white hover:bg-transparent hover:text-black hover:border focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        href="/get-started">
                            Contact Us
                    </a>

                </div>
            </div>


            <div className="translate-x-20 -translate-y-20 flex flex-col px-7 py-5 w-auto self-end text-gray-400 bg-white rounded-[20px]">
                <span className="text-blue-800 text-3xl sm:text-4xl font-semibold">
                    22k+
                </span>
                <span>Property Ready</span>
                <span>to buy and Sell</span>


            </div>
            <div className="flex justify-center gap-5 w-80 h-[70vh] text-gray-400 bg-slate-300 rounded-[20px]"></div>
        </section>
    </>
    );
}