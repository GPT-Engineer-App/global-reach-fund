import React from "react";
import { Box, Heading, Text, Button, Flex, Image, SimpleGrid, Icon, Divider, Input, Select, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { FaGlobe, FaChartLine, FaCalculator } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="navy" color="white" py={20} px={8}>
        <Flex maxW="1200px" mx="auto" align="center" direction={["column", "row"]}>
          <Box flex="1" mr={[0, 8]}>
            <Heading as="h1" size="2xl" mb={4}>
              AXA World Equity Fund
            </Heading>
            <Text fontSize="xl" mb={8}>
              Unlock global investment opportunities with our trusted and reliable fund.
            </Text>
            <Button colorScheme="blue" size="lg">
              Invest Now
            </Button>
          </Box>
          <Image src="https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBpbnZlc3RtZW50fGVufDB8fHx8MTcxMTE1NjgyN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Global Investment" flex="1" />
        </Flex>
      </Box>

      {/* Fund Philosophy */}
      <Box py={20} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Our Investment Philosophy
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} maxW="1200px" mx="auto">
          <Box textAlign="center">
            <Icon as={FaGlobe} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Global Diversification
            </Heading>
            <Text>Invest in a diverse range of companies across the world.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaChartLine} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Long-term Growth
            </Heading>
            <Text>Focus on sustainable, long-term growth opportunities.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaCalculator} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Rigorous Analysis
            </Heading>
            <Text>Thorough research and analysis to identify the best investments.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Divider />

      {/* Performance History */}
      <Box py={20} px={8} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Performance History
        </Heading>
        <Box maxW="600px" mx="auto">
          <Stat mb={8}>
            <StatLabel>Annual Return (5 Years)</StatLabel>
            <StatNumber>12.5%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Above benchmark
            </StatHelpText>
          </Stat>
          <Image src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcGVyZm9ybWFuY2UlMjBjaGFydHxlbnwwfHx8fDE3MTExNTY4Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Performance Chart" mb={8} />
          <Text textAlign="center">Past performance is not indicative of future results. Invest wisely.</Text>
        </Box>
      </Box>

      {/* How to Invest */}
      <Box py={20} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          How to Invest
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={8} maxW="800px" mx="auto">
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Online Investment
            </Heading>
            <Text mb={4}>Invest online in just a few simple steps:</Text>
            <ol>
              <li>1. Create an account</li>
              <li>2. Choose your investment amount</li>
              <li>3. Select the AXA World Equity Fund</li>
              <li>4. Complete your transaction</li>
            </ol>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Contact a Financial Advisor
            </Heading>
            <Text mb={4}>Speak with one of our financial advisors for personalized guidance.</Text>
            <Flex>
              <Input placeholder="Your Email" mr={4} />
              <Button colorScheme="blue">Request Callback</Button>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="navy" color="white" py={8} px={8} textAlign="center">
        <Text>&copy; 2023 AXA World Equity Fund. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
