import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"
import SignoutButton from "@/components/ui/SignoutButton"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    // Use try-catch to handle potential errors from redirect
    try {
      redirect("/api/auth/signin?callbackUrl=/")
    } catch (error) {
      console.error("Error redirecting:", error)
    }
    // Return null or a loading indicator if redirecting
    return null
  }

  return (
    <>
      {session.user.id}
      {session.user.name}
      {session.user.email}
      <Image src={session.user.image || ""} alt={""} />

      <SignoutButton
        signOut={async () => {
          "use server"
          await signOut({redirectTo: "/"})
        }}
      />
    </>
  )
}
