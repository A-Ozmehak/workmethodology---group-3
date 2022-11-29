import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { listingDoc } from "../../utils/interface";
import Image from "next/image";
import React from "react";
import BookingForm from "../forms/BookingForm";

interface props {
  listing: listingDoc;
}

const ListingCard = ({ listing }: props) => {
  const profileImageStyle = {
    marginRight: ".5rem",
  };

  const locationStyle = {
    marginLeft: "12.8rem",
  };

  const priceStyle = {
    marginLeft: { base: "7rem" },
  };

  const dateStyle = {
    marginLeft: "1.2rem",
  };

  const cardFooterStyle = {
    padding: "0",
    marginBottom: "1rem",
    marginLeft: "1.2rem",
  };

  const flexColumnCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const flexCenter = {
    display: "flex",
    alignItems: "center",
  };

  const headingStyle = {
    marginBottom: "1rem",
  };

  const dividerStyle = {
    borderColor: "black",
  };

  const cardWidth = {
    width: { sm: "300px" },
  };

  const hideOnDesktop = {
    display: { md: "none" },
  };

  const dateInputStyle = {
    backgroundColor: "#F0F0F0",
  };

  return (
    <Box sx={hideOnDesktop}>
      <Box sx={flexColumnCenter}>
        <h1>{listing.title}</h1>
        <Card p={0} backgroundColor="#F0F0F0" sx={cardWidth} maxW="sm">
          <Image src={listing.media} alt="mocked" width="500" height="500" />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Box sx={flexCenter}>
                <Image
                  style={profileImageStyle}
                  src={"/monke.png"}
                  alt="profile picture"
                  width="28"
                  height="28"
                />
                <Link href="/profile">
                  <Text fontWeight="bold">Username</Text>
                </Link>
                <Text fontWeight="bold" sx={priceStyle}>
                  {listing.price}:- / dygn
                </Text>
              </Box>
              <Divider sx={dividerStyle} width="132px" />
              <Text fontWeight="bold">Beskrivning</Text>
              <Text>{listing.description}</Text>
            </Stack>
            <Text sx={locationStyle}>{listing.location}</Text>
          </CardBody>
          <BookingForm listing={listing} />
          {/* <Box sx={dateStyle}>
            <Text fontWeight="bold">Välj datum:</Text>
          </Box>
          <CardFooter sx={cardFooterStyle}>
            <ButtonGroup spacing={20}>
              <Input sx={dateInputStyle} type="date" />
              <Button variant="Primary" colorScheme="blue">
                Hyr
              </Button>
            </ButtonGroup>
          </CardFooter> */}
        </Card>
      </Box>
    </Box>
  );
};

export default ListingCard;
