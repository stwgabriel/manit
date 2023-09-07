import Link from 'next/link';

// Components
import { LogoStyles } from 'src/components/global/layout';
import MetaTitle from '../components/MetaTitle';

// Styles
import AuthPageContainer from '../styles/pages/auth';
import HomeContainer from '../styles/pages/home';

function Home() {
  return (
    <HomeContainer>
      <MetaTitle page="Home" />
      <AuthPageContainer>
        <LogoStyles>
          man
          <span>it</span>
        </LogoStyles>
        <Link href="/auth/signin">
          Signin
        </Link>
      </AuthPageContainer>
    </HomeContainer>
  );
}

export default Home;
