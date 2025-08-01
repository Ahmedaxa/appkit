'use client'

/* eslint-disable no-negated-condition */
import * as React from 'react'
import { IoArrowForward } from 'react-icons/io5'

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'

import type { SdkOption } from '@/src/utils/DataUtil'

import { RandomLink } from './RandomLink'

type Props = {
  title: React.ReactNode
  sdkOptions: SdkOption[]
}

export function ConfigurationList({ title, sdkOptions }: Props) {
  return (
    <>
      <Card marginTop={10} marginBottom={10}>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {sdkOptions.map(option => (
              <Box key={option.link + option.title}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      {option.title}
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {option.description}
                    </Text>
                  </Box>
                  {option.randomLinks !== undefined && option.randomLinks.length > 0 ? (
                    <RandomLink hrefs={option.randomLinks}>
                      <Button rightIcon={<IoArrowForward />}>Go</Button>
                    </RandomLink>
                  ) : (
                    <Box display="flex" gap={2} flexWrap="wrap">
                      {option.links ? (
                        option.links.map(link => (
                          <Link href={link.url}>
                            <Button>{link.title}</Button>
                          </Link>
                        ))
                      ) : (
                        <Link href={option.link}>
                          <Button rightIcon={<IoArrowForward />}>Go</Button>
                        </Link>
                      )}
                    </Box>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
