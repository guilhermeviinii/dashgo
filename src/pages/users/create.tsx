import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

type CreateUserForm = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserYupSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No minímo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserYupSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserForm> = async (
    data,
    event
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1140} px="6" mx="auto">
        <SideBar />

        <Box
          onSubmit={handleSubmit(handleCreateUser)}
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Heading size="lg" fontWeight="bold">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                error={errors.name}
                {...register("name")}
                label="Nome completo"
              />
              <Input
                error={errors.email}
                {...register("email")}
                type="email"
                label="E-mail"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                error={errors.password}
                {...register("password")}
                type="password"
                label="Senha"
              />
              <Input
                error={errors.password_confirmation}
                {...register("password_confirmation")}
                type="password"
                label="Confirmação da senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end" w="100%">
            <HStack>
              <Link passHref href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
