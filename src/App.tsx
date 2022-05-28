import * as React from "react";
import { Center, chakra, Heading, Stack } from "@chakra-ui/react";
import { Keyframes, Scroll } from "scrollex";

const ScrollItem = chakra(Scroll.Item);
const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);

const springs = {
  translateY: {
    damping: 100,
    stiffness: 1200,
    mass: 8
  }
};

const keyframes: Record<string, Keyframes> = {
  container: ({ maxScrollPosition }) => ({
    0: {
      translateY: 50
    },
    [maxScrollPosition]: {
      translateY: -50
    }
  }),
  item: ({ data }) => ({
    [data.index * 150]: {
      translateY: 35
    },
    [data.index * 150 + 400]: {
      translateY: -35
    }
  })
};

const items = ["Latte", "Espresso", "Americano", "Cortado", "Black"];

export default function App() {
  return (
    <ScrollContainer
      scrollAxis="y"
      height="100vh"
      bg="blackAlpha.900"
      color="whiteAlpha.800"
    >
      <ScrollSection showOverflow height="300vh">
        <Center pos="sticky" top={0} h="100vh">
          <ScrollItem keyframes={keyframes.container}>
            <Stack spacing={4}>
              {items.map((item, index) => {
                return (
                  <ScrollItem
                    key={item}
                    keyframes={keyframes.item}
                    springs={springs}
                    data={{ index }}
                  >
                    <Heading size="3xl" textAlign="center">
                      {item}
                    </Heading>
                  </ScrollItem>
                );
              })}
            </Stack>
          </ScrollItem>
        </Center>
      </ScrollSection>
    </ScrollContainer>
  );
}
