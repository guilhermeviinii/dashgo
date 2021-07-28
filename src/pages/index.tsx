import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";

import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<Inputs> = async (values, e) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values, formState);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            error={errors.email}
            type="email"
            label="E-mail"
            {...register("email")}
          />
          <Input
            error={errors.password}
            type="password"
            label="Password"
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
