import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { theme } from "../styles/theme";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: false,
  },
  zoom: {
    enabled: false,
  },
  foreColor: theme.colors.gray[500],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "Serie1", data: [31, 120, 10, 26, 23, 133] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1140} px="6" mx="auto">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            // pb="4"
          >
            <Text fontSize="lg" mb="8">
              Inscritos da semana
            </Text>
            <Chart type="area" height="160" options={options} series={series} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            // pb="4"
          >
            <Text fontSize="lg" mb="8">
              Taxas de aberturas
            </Text>
            <Chart type="area" height="160" options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
