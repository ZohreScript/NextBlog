import LoginForm from "@/components/auth/login-form";
import Container from "@/components/ui/Container";
import { authOption } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Login =async () => {
    const session = await getServerSession(authOption);
    if (session?.user.usreId) redirect('/');
    return (  
        <div className="mt-20">
            <Container>
                <LoginForm/>
                <div className="mt-8">
<Link href='/register' className='hover:text-blue-700'>
    <p className="text-center">برای عضویت کلیک نمایید</p>
</Link>
                </div>
            </Container>

        </div>
    );
}
 
export default Login;