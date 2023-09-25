import { authProviders } from "@/utiles/auth"
import NextAuth from "next-auth"

// console.log(authProviders);
// export const authOptions = {authProviders}
const handler=NextAuth(authProviders)
export {handler as GET, handler as POST}