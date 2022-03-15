import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../components/Form/Input";
import { Logo } from "../components/Header/Logo";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Home() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log(values);

    // APENAS PARA A DEMONSTRAÇÃO DE LOGIN
    if(values.email !== "" && values.password !== ""){
      router.push('/dashboard');
    }

  };

  return (
    <>
      <Head>
        <title>Login | dashgo.</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
          borderWidth="thin"
          borderColor="pink.400"
          m="4"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Flex justifyContent="center" alignItems="center" mb="4">
              <Logo centeredLogo />
            </Flex>

            <Input
              name="email"
              type="email"
              label="E-mail:"
              defaultValue="jhondoe@email.com"
              error={errors.email}
              {...register("email")}
            />
            <Input
              name="password"
              type="password"
              label="Senha:"
              defaultValue="123"
              error={errors.password}
              {...register("password")}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
