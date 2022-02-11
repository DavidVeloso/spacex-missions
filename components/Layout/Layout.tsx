import { ReactNode, FC } from 'react';
import Head from 'next/head';
import { Stack, Heading, Box, Link, Center } from '@chakra-ui/react';

type ILayoutProps = {
  children?: ReactNode;
}

const Header = () => {
  return (
    <Heading size='xl' padding={4} bg='#606c73' color='#d2dadb'>
      SpaceX
    </Heading>
  );
};

const HeadMeta = () => {
  return (
    <Head>
      <title>SpaceX Missions</title>
      <meta name="description" content="Archie’s coding challenge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

const Footer = () => {
  return (
    <Box as='footer' p='3' bg='#606c73' color='#d2dadb'>
      <Center>
        <Link href='https://www.linkedin.com/in/davidveloso/' isExternal>
          Powered by David Veloso
        </Link>
      </Center>
    </Box>
  )
}

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => (
  <Stack bg='gray.50'>
    <HeadMeta />
    <Header />
    {children}
    <Footer />
  </Stack>
)

export default Layout
