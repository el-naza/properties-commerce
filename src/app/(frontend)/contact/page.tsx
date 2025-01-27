export default function Contact() {
  return (
    <div>
      <div className="px-32  bg-gray-100">
        <div className="bg-white pt-12 text-[#222222] px-10 pb-4">
          You’ve got questions? We’ve got answers.
        </div>
        <p className="pt-4">"*" indicates required fields</p>
        <form action="">
          <div className="flex gap-3 py-4">
            <div>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name=""
                id=""
                className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
                placeholder="Enter Full Name"
              />
            </div>
            <div>
              <label htmlFor="" className="py-4">
                Email
              </label>
              <input
                type="text"
                className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name=""
                id=""
                className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
              />
            </div>
          </div>

          <div className="py-4">
            <label htmlFor="">I am...</label>
            <input
              type="text"
              className="border solid w-full h-10 px-2 border-black-1 rounded-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border solid w-full px-2 border-black-1 rounded-sm"
              placeholder="Type your enquiry here"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-[#FF6731] text-white py-2 rounded-md">
            Request Information
          </button>
        </form>
      </div>

      <div></div>
    </div>
  )
}
