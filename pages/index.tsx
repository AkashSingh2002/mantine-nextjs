import { NextPage } from 'next';
import { Container, Text, Button, Image, Grid, Group, Box } from '@mantine/core';

const IndexPage: NextPage = () => {
  return (
    <Container size="lg" py="xl">
      <Grid gutter="xl" justify="center">
        <Grid.Col span={6}>
          <Image src="/vocal-remover-logo.png" alt="Vocal Remover Logo" />
        </Grid.Col>
        <Grid.Col span={6}>
          <div style={{ textAlign: 'center' }}>
            <Text size="xl" weight={700} style={{ marginBottom: 10 }}>
              Vocal Remover
            </Text>
            <Text size="lg" color="#6c6c6c" style={{ marginBottom: 20 }}>
              Separate vocals from instrumentals in seconds
            </Text>
            <Button
              color="blue"
              size="lg"
              radius="xl"
              styles={(theme) => ({
                root: {
                  backgroundColor: theme.colors.blue[7],
                  '&:hover': {
                    backgroundColor: theme.colors.blue[9],
                  },
                },
              })}
            >
              Upload Your Audio File
            </Button>
          </div>
        </Grid.Col>
      </Grid>
      <Grid gutter="xl" mt="xl" justify="center">
        <Grid.Col span={3}>
          <Box sx={{ border: '1px solid #ddd', padding: 20, borderRadius: 10 }}>
            <Text size="lg" weight={700} style={{ marginBottom: 10 }}>
              Menu
            </Text>
            <Group direction="column" spacing="xs">
              <Text size="md" color="#6c6c6c" style={{ cursor: 'pointer' }}>
                Home
              </Text>
              <Text size="md" color="#6c6c6c" style={{ cursor: 'pointer' }}>
                Features
              </Text>
              <Text size="md" color="#6c6c6c" style={{ cursor: 'pointer' }}>
                Pricing
              </Text>
              <Text size="md" color="#6c6c6c" style={{ cursor: 'pointer' }}>
                About
              </Text>
            </Group>
          </Box>
        </Grid.Col>
        <Grid.Col span={9}>
          <Grid gutter="xl">
            <Grid.Col span={4}>
              <div style={{ textAlign: 'center' }}>
                <Text size="lg" weight={700} style={{ marginBottom: 10 }}>
                  How it Works
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 20 }}>
                  Our AI-powered algorithm separates vocals from instrumentals with ease.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div style={{ textAlign: 'center' }}>
                <Text size="lg" weight={700} style={{ marginBottom: 10 }}>
                  Features
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 10 }}>
                  High-quality vocal and instrumental tracks
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 10 }}>
                  Fast and easy to use
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 20 }}>
                  No technical expertise required
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div style={{ textAlign: 'center' }}>
                <Text size="lg" weight={700} style={{ marginBottom: 10 }}>
                  Benefits
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 10 }}>
                  Create remixes and mashups
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 10 }}>
                  Isolate vocals for karaoke or practice
                </Text>
                <Text size="md" color="#6c6c6c" style={{ marginBottom: 20 }}>
                  Enhance your music production workflow
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default IndexPage;