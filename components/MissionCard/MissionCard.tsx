import { useState, FC } from 'react';
import { Box, Link, Center, Text, Heading } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

import { MissionModal, ImageLoader } from '@components/index';
import { IMission } from '@shared/interfaces/mission.interface';
import deafaultImg from '../../public/deafult-img.png';

interface IMissionCardProps {
  mission: IMission;
}

const MissionCard: FC<IMissionCardProps> = ({ mission }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id, mission_name, details, links: { article_link, mission_patch_small }, rocket: { rocket_name }
  } = mission;

  return (
    <Box
      key={id}
      height='100%'
      maxW='sm'
      boxShadow='xl'
      borderRadius='xl'
      overflow='hidden'
      bg='white'
    >
      <Box overflow='hidden' boxShadow='base' bg='gray.400'>
        <Center p={2}>
          <ImageLoader src={mission_patch_small || deafaultImg} alt={mission_name} height={150} width={150} />
        </Center>
      </Box>
      <Box p='2'>
        <Box display='flex' justifyContent='space-between'>
          <Heading
            mt={1}
            p={1}
            fontSize='md'
            color='black'
            fontWeight='black'
            onClick={() => setIsModalOpen(true)}
            cursor='pointer'
          >
            {mission_name}
          </Heading>
          <Link href={article_link} p={1} isExternal>
            <LinkIcon mx='1' />
          </Link>
        </Box>
        <Text fontSize='sm' color='gray.500' p={1} fontWeight='semibold'>
          {rocket_name}
        </Text>
        <Text p={1} color='black' fontSize='small' fontWeight='medium' noOfLines={3}>
          {details || 'No information available.'}
        </Text>
      </Box>
      <MissionModal mission={mission} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default MissionCard;