import { useState } from "react";

import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
export default function SignUp() {
  const [formData, setformdata] = useState({name:"", email: "", password: "",pic:"" });
  const [loading,setLoading]=useState(false)
  const [success,setSuccess]=useState(false)
  const [upload,setUpload]=useState(false)

  const HandleChangeInform = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)
  //  let data={`${e.target.value}`}

  setformdata({ ...formData, ...{[e.target.id]: e.target.value }});
   
  };
  console.log(formData)
  toast("successfully uploaded")


const HandleImage=async(e)=>{

    console.log("is it collected")
    setLoading(true)

    if( e.target.value===undefined){
      prompt("please add image")
    }
    else
    {

      const data=new FormData()
      data.append("file",e.target.files[0])
      data.append("upload_preset","Chat_app_samman")
      data.append("cloud_name","didy04lfa")
      console.log(data)
      await fetch("https://api.cloudinary.com/v1_1/didy04lfa/image/upload",{
        method:'post',
        body:data
      }).then((res)=>res.json())
      
      .then((data)=>{
        setLoading(false)
        let pic={'pic':data.url.toString()}
        setformdata({...formData,...pic})
        console.log(formData
          )

      }).catch((e)=>{
        console.log(e)
      })
     
    }
    

  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    let data={"name":formData.name,"email":formData.email,"password":formData.password,"pic":formData.pic}

    if(formData.pic==="")
    {
      setUpload(true)
      toast("upload your image")
    }

      try {
      console.log("calling api");
      console.log(data)
      await axios
        .post("http://localhost:5000/app/signup", data)
        .then((response) => {
          console.log("no response");
          console.log(response);
        })
        .catch((error) => {
          console.log("no error");
          console.log(error);
        });
    } catch (e) {
      console.log("error while sending post request", e);
    }  try {
      console.log("calling api");
      await axios
        .post("http://localhost:5000/app/log-in", {
          email: "amgain1@gmail.com",
          password: "samman",
        })
        .then((response) => {
          console.log("no response");
          console.log(response);
        })
        .catch((error) => {
          console.log("no error");
          console.log(error);
        });
    } catch (e) {
      console.log("error while sending post request", e);
    }
  };

  return (
    <div className='h-[100vh] dark:bg-gray-900'>
      <section className='bg-gray-50 dark:bg-gray-900 pt-14 md:pt-0'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 lg:py-0 mt-10 md:mt-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            CHAT APP
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign Up to your account
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                  <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your Name
                  </label>
                  <input
                    value={formData.name}
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Your Name'
                    required=''
                    onChange={HandleChangeInform}
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your email
                  </label>
                  <input
                    value={formData.email}
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='example@gmail.com'
                    required=''
                    onChange={HandleChangeInform}
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Password
                  </label>
                  <input
                    value={formData.password}
                    type='password'
                    name='password'
                    id='password'
                    
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    onChange={HandleChangeInform}
                  />
                </div>

                  <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                   {success ? "uploaded" : "Uplaod Your Image"} 
                  </label>
                  <input
                    type='file'
                    name='pic'
                    id='pic'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    onChange={HandleImage}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                        required=''
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label className='text-gray-500 dark:text-gray-300'>
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Sign Up
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account ?{" "}
                  <a
                    href='/login'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {
        success && (<Toaster
          toastOptions={{
    className: '',
    style: {
      background:'green',
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}>

        </Toaster>)
      }

         {
        upload && (<Toaster
          toastOptions={{
    className: '',
    style: {
      background:'red',
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}>

        </Toaster>)
      }
    </div>
  );
}
