import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import ListingForm from "../components/forms/ListingForm";
import ShadowContainer from "../components/layout/ShadowContainer";
import { useUserContext } from "../utils/userContext";

const CreateListingPage = () => {
  const user = useUserContext();
  const loggedInUser = user.loggedInUsername;

  return (
    <ShadowContainer>
      {loggedInUser ? (
        <ListingForm />
      ) : (
        <Flex flexDirection={"column"} alignItems={"center"} gap={3}>
          <Text textAlign={"center"}>
            För att föra in en annons hos oss behövs ett konto.
          </Text>
          <Text textAlign={"center"}>Logga in eller registrera dig nedan.</Text>
          <Flex gap={10} marginTop={6}>
            <Link href="/login">
              <Button variant="Primary">Logga in</Button>
            </Link>
            <Link href="/register">
              <Button variant="Secondary">Registrera dig</Button>
            </Link>
          </Flex>
        </Flex>
      )}
    </ShadowContainer>
  );
};

export default CreateListingPage;
