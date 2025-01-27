import { getServerSession } from 'next-auth';
import { authOption } from '@/libs/next-auth';
import Logo from './logo';
import Container from '../ui/Container';
import NavbarRoutes from './navbar-routes';
import NavbarMobileMenu from './navbar-mobile-menue';
import UserAvatar from '../user-avatar/user-avatar';

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <nav className='border-b py-3'>
      <Container isFullHeight className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-x-6'>
          <div className='hidden md:block'>
            <Logo />
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes session={session} />
          </div>
          <div className='block md:hidden'>
            <NavbarMobileMenu session={session} />
          </div>
        </div>
        <div className='flex items-center justify-normal gap-x-6'>
          <UserAvatar  session={session} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;