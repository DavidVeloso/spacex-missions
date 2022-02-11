import { FC } from 'react';
import { Center, Box, Link, Text, useMediaQuery } from '@chakra-ui/react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  SimpleGrid,
} from '@chakra-ui/react';

import { IMission } from '@shared/interfaces/mission.interface';
import { ImageLoader } from '@components/index';

interface IMissionModalProps {
  mission: IMission;
  isOpen: boolean;
  onClose: () => void;
}

const MissionModal: FC<IMissionModalProps> = ({ isOpen, mission, onClose }) => {

  const [mobileView] = useMediaQuery('(max-width: 768px)');

  const {
    mission_name, details, launch_date_local,
    links: { article_link, flickr_images }, rocket: { rocket_name }
  } = mission;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={mobileView ? 'full' : 'xl'} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize='xl' color='black' fontWeight='black'>
          {mission_name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize='sm' color='gray.500' p={2} fontWeight='semibold'>
            Rocket: {rocket_name} - {new Date(launch_date_local).toLocaleDateString('en-US')}
          </Text>
          <Text p={2}>{details}</Text>
          <Text fontSize='sm' color='gray.500' p={2} fontWeight='semibold' float='right'>
            <Link href={article_link} isExternal>
              Read more
            </Link>
          </Text>
          {!details && (
            <Center fontSize="15px" fontStyle="italic">
              No details available
            </Center>
          )}
          {!!flickr_images.length && (
            <Box mt='5'>
              <Text fontSize='xl' color='black' fontWeight='black'>
                Galery
              </Text>
              <SimpleGrid p='10px' spacing='10px' columns={3}>
                {flickr_images?.map((img: string, i: number) => (
                  <Center key={i}>
                    <ImageLoader src={img} alt={mission_name} height={200} width={200} />
                  </Center>
                ))}
              </SimpleGrid>
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MissionModal;