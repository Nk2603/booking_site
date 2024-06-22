import { useState } from "react"

function BookingForm(){
    let [formData,setFormData]=useState({});
    const details = (e)=>{
        // const {name,value} = e.target;
        const {name,value,files} = e.target;
        // console.log(value)
        setFormData((previousData)=>({
            // ...previousData,[name]:value,
            ...previousData,[name]:(name === "hotelimage")?files[0]:value,
        }))
    }
    // const uploadfiles = (e)=>{0
    //     const{image,files}=e.target;
    //     setFormData((previousData)=>({
    //         ...previousData,[image]:files[0],
    //     }))

    // }
    const submit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        //api
        const formD = new FormData;
        formD.append("hotelname",formData.hotelname)
        formD.append("hotelcontact",formData.hotelcontact)
        formD.append("hotelemail",formData.hotelemail)
        formD.append("hotellocation",formData.hotellocation)
        formD.append("hotelprice",formData.hotelprice)
        formD.append("hotelimage",formData.hotelimage)
        
        const response = await fetch("http://localhost:2024/bookingform",{
            method:"POST",
            body:formD
           
          
          });
          const jsonData = await response.json();
          console.log(jsonData)
    }
    return(
        <>
        
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        HOTEL DETAILS
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={submit}>
        <div>
          <label
            htmlFor="HotelName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Hotel Name
          </label>
          <div className="mt-2">
            <input
            placeholder="  enter Hotel name"
              id="HotelName"
              name="hotelname"

              type="text"
              autoComplete="HotelName"
              required=""
            
              onChange={details}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Contact"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Contact Number
          </label>
          <div className="mt-2">
            <input
            placeholder="   enter valid contact number"
              id="contact"
              name="hotelcontact"
              type="number"
              autoComplete="contact"
              required=""
              
              onChange={details}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
           Hotel Email address
          </label>
          <div className="mt-2">
            <input
            placeholder="  create a valid email"
              id="email"
              name="hotelemail"
              type="email"
              autoComplete="email"
              required=""
              
              onChange={details}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Hotel Location
            </label>
            
          </div>
          <div className="mt-2">
            <input
            placeholder="   location"
              id="location"
              name="hotellocation"
              type="text"
              autoComplete="location"
              required=""
            
              onChange={details}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Hotel Pricing
            </label>
            
          </div>
          <div className="mt-2">
            <input
            placeholder="  price "
              id="price"
              name="hotelprice"
              type="number"
              autoComplete=""
              required=""
              
              onChange={details}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Hotel Images
            </label>
            
          </div>
          <div className="mt-2">
            <input
            placeholder="  upload images"
              id="image"
              name="hotelimage"
              type="file"
              autoComplete="image"
              required=""
             
              onChange={details}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit Details
          </button>
        </div>
      </form>
     
    </div>
  </div>
        </>
    )
}
export default BookingForm