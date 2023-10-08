/* eslint-disable react/no-unescaped-entities */
export default function Filters() {
    return (
        <section className="">
            <div className="mb-6 flex item-center p-2 pl-6 text-start text-gray-400 bg-white rounded-[20px] mx-auto w-11/12 text-center gap-5 max-sm:hidden max-md:hidden max-lg:hidden">
                <label className=" p-4">
                    <span
                        className="flex text-sm font-medium text-slate-700">
                        Location
                    </span>
                    <input
                        type="text"
                        name="text"
                        className="mt-1 px-3 py-2 bg-white placeholder-slate-400 focus:border-none block w-full rounded-md sm:text-sm"
                        placeholder="bangladesh"/>
                </label>

                <label className=" border-x-2 border-slate-300 border-h-1 p-4">
                    <span
                        className=" text-sm font-medium text-slate-700">
                        Property Type
                    </span>
                    <input
                        type="text"
                        name="text"
                        className="mt-1 px-3 py-2 bg-white placeholder-slate-400 focus:border-none block w-full rounded-md sm:text-sm"
                        placeholder="Duplex"/>
                </label>

                <label className=" p-4">
                    <span
                        className="flex text-sm font-medium text-slate-700">
                        Budget
                    </span>
                    <input
                        type="text"
                        name="text"
                        className="mt-1 px-3 py-2 bg-white placeholder-slate-400 focus:border-none block w-full rounded-md sm:text-sm"
                        placeholder="$12,000"/>
                </label>

                <div className="m-8 flex">
                    <a
                        className="w-50 rounded-[13px] bg-blue px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        href="/get-started">
                        Search Property
                    </a>
                </div>
            </div>
    </section>
    );
}