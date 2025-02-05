export default function Inquiry() {
  return (
    <div>
      <div className="flex relative flex-wrap px-14 gap-12 bg-[url('/Home/Fully-detached-3.jpg')] bg-cover py-24  items-center justify-center">
        <div className="bg-primary/[.85] absolute top-0 bottom-0 w-full" />
        <div className="container flex flex-wrap gap-16 items-center justify-center z-10">
          <div className="md:max-w-[25%] text-white">
            <div>
              <h1 className="text-[1.7rem] py-16">Why Deal With US</h1>
              <div className="w-[30%] bg-white h-[1px]"></div>
            </div>
            <div className="pt-8">
              <h1 className="pb-3 text-[2.5rem]">01.</h1>
              <h2 className="text-[1.38rem]">Comprehensive Services</h2>
              <p className="py-3 text-justify">
                From real estate to construction, shortlets to interior designs, we’re your one-stop
                solution for all property needs.
              </p>
              <div className="w-[30%] bg-white h-[1px] mt-10"></div>
            </div>
            <div>
              <h1 className="pb-3 text-[2.5rem]">02.</h1>
              <h2 className="text-[1.38rem]">Expertise You Can Trust</h2>
              <p className="py-3 text-justify">
                With seasoned professionals and years of experience, we deliver excellence in every
                project.
              </p>
              <div className="w-[30%] bg-white h-[1px] mt-10"></div>
            </div>
          </div>
          <div className="md:max-w-[25%] text-white">
            <div className="pt-8">
              <h1 className="pb-3 text-[2.5rem]">03.</h1>
              <h2 className="text-[1.38rem]">Tailored Solutions</h2>
              <p className="py-3 text-justify">
                Whether you're buying, renting, or designing, we customize services to fit your
                vision and lifestyle.
              </p>
              <div className="w-[30%] bg-white h-[1px] mt-10"></div>
            </div>
            <div className="pt-8">
              <h1 className="pb-3 text-[2.5rem]">04.</h1>
              <h2 className="text-[1.38rem]">Prime Locations</h2>
              <p className="py-3 text-justify">
                Our properties are strategically located, offering convenience, luxury, and value.
              </p>
              <div className="w-[30%] bg-white h-[1px] mt-10"></div>
            </div>
            <div className="pt-8">
              <h1 className="pb-3 text-[2.5rem]">05.</h1>
              <h2 className="text-[1.38rem]">Commitment to Quality</h2>
              <p className="py-3 text-justify">
                We combine innovation and precision to ensure every detail meets your highest
                expectations.
              </p>
              <div className="w-[30%] bg-white h-[1px] mt-10"></div>
            </div>
          </div>
          <div className="bg-white p-12 text-black-1 md:max-w-[45%]">
            <form action="">
              <h2 className="text-2xl font-[500]">Got Any Inquiry?</h2>
              <p className="text-[1.2rem] pt-1 pb-6">Start here</p>
              <p className="">
                "<span className="text-red-800">*</span>" indicates required fields
              </p>
              <div className="py-2">
                <label htmlFor="" className="font-bold">
                  Inquiry Type <span className="text-red-800">*</span>
                </label>
                <select
                  name=""
                  id=""
                  defaultValue={'Select'}
                  className="block w-full h-10 px-2 border solid border-black-1"
                >
                  <option value="Purchase">Purchase</option>
                  <option value="Rent">Rent</option>
                  <option value="Mortgage">Mortgage</option>
                </select>
              </div>

              <div className="py-2">
                <label htmlFor="" className="font-bold">
                  Information <span className="text-red-800">*</span>
                </label>
                <div className="">
                  <select
                    name=""
                    id=""
                    className="block w-full h-10 px-2 border solid border-black-1"
                    defaultValue={'Select'}
                  >
                    <option value="Purchase">I'm a first time buyer</option>
                    <option value="Rent">I'm a real estate investor</option>
                    <option value="Mortgage">I'm a real estate agent</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
                    placeholder="Last Name"
                  />
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="py-2">
                <label htmlFor="" className="font-bold">
                  Your Phone <span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  className="border solid w-full h-10 px-2 pt-2 border-black-1 rounded-sm"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="py-2">
                <label htmlFor="" className="font-bold">
                  Property <span className="text-red-800">*</span>
                </label>
                <div className="">
                  <select
                    name=""
                    id=""
                    defaultValue={'Select Type'}
                    className="block w-full h-10 px-2 border solid border-black-1"
                  >
                    <option value="Commercial Land">Commercial Land</option>
                    <option value="Residential Land">Residential Land</option>
                    <option value="Office">Office</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Fully Detached Duplex">Fully Detached Duplex</option>
                    <option value="Semi Detached Duplex">Semi Detached Duplex</option>
                    <option value="Terrace Duplex">Terrace Duplex</option>
                    <option value="Maisonette">Maisonette</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
                    placeholder="Max Price"
                  />
                  <select
                    name=""
                    id=""
                    defaultValue={'Number of Beds'}
                    className="w-full h-10 px-2 border solid border-black-1"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-secondary text-white py-2 rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
