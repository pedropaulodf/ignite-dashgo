import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  theme: {
    mode: "dark"
  },
  colors: ['#ED64A6', '#F6E05E', '#68D391'],
  chart: {
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
    background: 'transparent',
  },
  grid: {
    show: false,
  },
  dataLabels: {
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
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.2,
    },
  },
  tooltip: {
    // enabled: false,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: "Roboto",
    },
  },
};

const optionsChartFillLess = {
  ...options,
  fill: {}
}

const series1 = [{
  name: 'Info 1',
  data: [31, 40, 28, 51, 42, 109, 100],
}];

const series3 = [{
  name: 'Info 1',
  data: [31, 40, 28, 51, 42, 109, 100],
}, {
  name: 'Info 2',
  data: [11, 32, 45, 32, 34, 52, 41]
}, {
  name: 'Info 3',
  data: [75, 38, 65, 12, 14, 42, 61]
}];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | dashgo.</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <SideBar />

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="400px"
            alignItems="flex-start"
          >
            <Box p={["5", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              <Chart
                options={options}
                series={series3}
                type="area"
                height={180}
              />
            </Box>

            <Box p={["5", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>
              <Chart
                options={optionsChartFillLess}
                series={series3}
                type="line"
                height={180}
              />
            </Box>

            <Box p={["5", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Downloads do App
              </Text>
              <Chart
                options={optionsChartFillLess}
                series={series1}
                type="histogram"
                height={180}
              />
            </Box>

            <Box p={["5", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Vídeo mais acessado
              </Text>
              <Chart
                options={options}
                series={series3}
                type="heatmap"
                height={180}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
