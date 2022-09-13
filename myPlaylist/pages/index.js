//Clase index del proyecto

import Head from 'next/head'
import Image from 'next/image'
import {YoutubeVideoPlayer} from "../components/youtubePlayer";
import { useState } from 'react';
import { Box, Center, Heading,SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};
export default function Home({ results }) {
  const[currentVideo, setCurrentVideo] = useState(results[0]);
  const[playing, setPlaying] = useState(false);
  return (
    <>
      <Head>
        <title>TECFlix</title>
        <meta name="description" content="A YouTube video player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box width="100%" mx="auto" my={4}>
          <Heading my={8}as="h1" textAlign="center"> My playlist </Heading>
          <Box maxWidth="720px" mx="auto" p={4} borderRadius="lg" boxShadow="2xl" my={8}>
          <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId} playing={playing} />
          </Box>
        
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {results &&
            results.map((video) => {
              return (
                <Box key={video.id} mx={4}>
                  
                  <Image
                    src={video.snippet.thumbnails.maxres?.url ||  "https://via.placeholder.com/300"}
                    layout="intrinsic"
                    width={1280}
                    height={720}
                    alt={video.snippet.title}
                  />
                  <Heading
                    as="h5"
                    fontSize="sm"
                    textAlign="left"
                    noOfLines={1}
                    mb={2}
                  >
                    {video.snippet.title}
                  </Heading>
                  <Center>
                  <Button mx="auto" my={4} color="#060505" colorScheme="blue" onClick={() => {setCurrentVideo(video); setPlaying(true); scrollTop();}}>Ver ahora</Button>
                  </Center>
                </Box>
              );
            })}
        </SimpleGrid>
        </Box>
    </>
  )
}

export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const REQUEST_URL = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL_uIel3acJ0ZCaY3od3MR07z3ObP5WJNG&key=${process.env.YOUTUBE_API_KEY}&maxResults=15`;
  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}