/* eslint-disable react/no-unescaped-entities */
import Filters from "./filters";

export default function Hero() {
    return (
        <>
            <div className="mb-20">
                <section className = "text-gray-400 bg-slate-300 rounded-[40px] h-[109vh] ">
                <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-screen">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-black bg-clip-text text-3xl text-transparent sm:text-6xl font-semibold">
                            Investing In Your Future
                            <span className="sm:block">
                                One Home At A Time
                            </span>
                        </h1>
                        <p className="mx-auto mt-5 max-w-xl sm:text-l/relaxed">
                            We'll help you find the key to your dream home. Experience the joy of
                            homeownership. Let us make your home buying journey simple.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded-[13px] border border-black px-10 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <Filters></Filters>
                </section>
            </div>
        </>
    );
}