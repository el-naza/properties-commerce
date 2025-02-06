export default function Page() {
  return (
    <>
      <div className="bg-primary/50 w-full h-[116.83px]" />
      <div className="bg-gray-50/50 py-12">
        <div className="bg-white [box-shadow:_0px_20px_40px_0px_rgba(0,_0,_0,_0.1)] mx-auto max-w-[700px] p-12">
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
    </>
  )
}
