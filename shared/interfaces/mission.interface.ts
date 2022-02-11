export interface IMission {
  id: string
  mission_name: string
  details: string
  launch_date_local: string
  rocket: {
    rocket_name: string
  },
  links: {
    article_link: string
    mission_patch_small: string
    flickr_images: string[]
  }
}