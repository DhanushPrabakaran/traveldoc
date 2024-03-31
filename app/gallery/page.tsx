import Sea from "@/public/Sea.jpg"
const page = () => {
  return (
    <div
      className="h-screen text-white bg-gray-950 bg-opaciy-40 bg-blend-overlay flex flex-col items-center justify-center align-middle bg-fixed"
      style={{
        backgroundImage: `url(${Sea.src})`,
        backgroundPosition: "center",
        objectPosition: "center",
        backgroundOrigin: "center",
      }}
    >
      
    </div>
  )
}

export default page
