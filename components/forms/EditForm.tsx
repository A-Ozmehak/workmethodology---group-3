import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { updateUser } from "../../pages/api/users";
import { userInterface } from "../../utils/interface";
import TextInput from "../inputs/TextInput";
import UploadMedia, { MediaProps } from "./UploadMedia";

interface Props {
  profileImage: MediaProps;
  profile: userInterface;
  setEdit: any;
}

const EditForm = ({ profileImage, profile, setEdit }: Props) => {

  const [media, setMedia] = useState("")

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <Box>
      <Text sx={title}>Redigera din profil</Text>
      <Formik
        initialValues={{
          username: "",
          location: "",
          image: media,
          bio: "",
        }}
        onSubmit={async (values) => {
          values.image = media
          await updateUser(profile.id!, values, setEdit, refreshData);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="username">Användarnamn</FormLabel>
            <TextInput
              as={Input}
              id="username"
              name="username"
              type="username"
              variant="filled"
              validate={(value: string) => {
                let error;
                if (value.length < 2) {
                  error = "Skriv in ett användarnamn";
                }
                return error;
              }}
            />
            <FormLabel htmlFor="location">Plats</FormLabel>
            <TextInput
              as={Input}
              id="location"
              name="location"
              type="location"
              variant="filled"
              validate={(value: string) => {
                let error;
                if (value.length < 2) {
                  error = "Skriv in en plats.";
                }
                return error;
              }}
            />
            <FormLabel htmlFor="bio">Beskrivning</FormLabel>
            <TextInput
              as={Input}
              id="bio"
              name="bio"
              type="bio"
              variant="filled"
              validate={(value: string) => {
                let error;
                if (value.length < 2) {
                  error = "Skriv in en beskrivning om dig själv.";
                }
                return error;
              }}
            />
            <FormLabel htmlFor="image">Profil bild</FormLabel>
            <UploadMedia id="id" value="value" updateField={setMedia} />
            <Box sx={btnBox}>
              <Button type="submit" variant="Accept">
                Spara
              </Button>
              {/* TODO: open up modal with "are you sure you want to remove your account." */}
              <Button variant="Reject">Ta bort konto</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditForm;

const title = {
  marginBottom: "1rem",
};

const btnBox = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1rem",
};
