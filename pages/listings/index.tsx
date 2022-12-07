import { Box, Heading } from "@chakra-ui/react";
import ListingPreviewCard from "../../components/cards/ListingPreviewCard";
import { listingInterface } from "../../utils/interface";
import { getListings } from "../api/listings";

const ListingIndex = ({ listings }: any) => {
  return (
    <Box pt="1rem" maxW="1200px" m="auto">
      <Heading size="md" as="h3" p="0rem 0 0.5rem 0" pl="1rem">
        Alla annonser
      </Heading>
      <ListingPreviewCard listings={listings} />
    </Box>
  );
};

export async function getServerSideProps() {
  const listings = await getListings();
  return {
    props: {
      listings,
    },
  };
}

export default ListingIndex;