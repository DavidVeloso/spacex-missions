import { gql } from '@apollo/client';

export const GET_MISSIONS_QUERY = gql`
  query GetMissions($missionName: String!) {
    launchesPast(
      limit: 20, 
      order: "desc", 
      sort:"launch_date_local", 
      find: {mission_name: $missionName}
    ) {
      id
      mission_name
      details
      launch_date_local
      links {
        article_link
        mission_patch_small
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;
