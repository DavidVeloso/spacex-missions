import { useState, FC } from 'react';
import Image from 'next/image';
import { Box, Link, Center, Text, Heading, Skeleton } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

import { IMission } from '@shared/interfaces/mission.interface';

interface IMissionCardProps {
  mission: IMission
}

const MissionCard: FC<IMissionCardProps> = ({ mission }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const {
    id, mission_name, details,
    links: { article_link, flickr_images, mission_patch_small }, rocket: { rocket_name }
  } = mission;
  const missionImg = flickr_images[0] || mission_patch_small;
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
          <Skeleton isLoaded={!isLoadingImage}>
            <Image
              src={missionImg}
              alt={mission_name}
              loading='lazy'
              height={150}
              width={150}
              onLoadingComplete={() => setIsLoadingImage(false)}
            />
          </Skeleton>
        </Center>
      </Box>
      <Box p='2'>
        <Box display='flex' justifyContent='space-between'>
          <Heading mt={1} p={1} fontSize='md' color='black' fontWeight='black'>
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
    </Box>
  )
}

export default MissionCard;