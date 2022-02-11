import type { NextPage } from 'next';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client'
import { Center, SimpleGrid, Skeleton } from '@chakra-ui/react';

import { Layout, SearchBox, MissionCard } from '@components/index';
import { GET_MISSIONS_QUERY } from '@graphql/missions/mission.queries';
import { IMission } from '@shared/interfaces/mission.interface';
import ApClient from '@shared/apollo';

interface IHomeProps {
  sMissions: IMission[];
}

const Home: NextPage<IHomeProps> = ({ sMissions }) => {

  const [missions, setMissions] = useState<IMission[]>(sMissions);

  const [executeSearch, { loading }] = useLazyQuery(GET_MISSIONS_QUERY, {
    onCompleted: (data) => setMissions(data?.launchesPast),
  });

  const handleSeachMission = (value: string) => {
    executeSearch({ variables: { missionName: value } });
  };

  return (
    <Layout>
      <Center paddingTop='30'>
        <SearchBox onChange={handleSeachMission} />
      </Center>
      {!missions.length && (
        <Center fontSize='15px' fontStyle='italic'>
          Ops.. We can&apos;t find this mission :(
        </Center>
      )}
      <SimpleGrid p='40px' rounded='lg' spacing='40px' minChildWidth='250px' color='gray.400'>
        {missions?.map((mission) => (
          <Skeleton key={mission?.id} isLoaded={!loading}>
            <MissionCard mission={mission} />
          </Skeleton>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await ApClient.query({
    query: GET_MISSIONS_QUERY,
    variables: { missionName: '' }
  });

  return {
    props: {
      sMissions: data?.launchesPast
    }
  };
}

export default Home;
