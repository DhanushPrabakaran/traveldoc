import React from 'react'

const Login = () => {
  return (
    <div
    className='flex flex-col items-center justify-center h-screen'>
        <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-300 m-1">
          Login Form
        </div>
      <form>
        <label htmlFor=""></label>
        <input type="text" name="hai" />
      </form>
    </div>
  )
}

export default Login
// import { providers, signIn, getSession, csrfToken } from "next-auth/client";

// function Page({ providers }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {Object.values(providers).map((provider) => {
//           if (provider.id === "google" || provider.id === "github") {
//             return (
//               <div key={provider.name}>
//                 <button
//                   onClick={() => signIn(provider.id)}
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Sign in with {provider.name}
//                 </button>
//               </div>
//             );
//           } else {
//             return null; // Exclude providers other than Google and GitHub
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default  Page;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: {
//       providers: await providers(context),
//       csrfToken: await csrfToken(context),
//     },
//   };
// }
