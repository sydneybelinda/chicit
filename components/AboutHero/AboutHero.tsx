import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './Dots';
import classes from './abouthero.module.css';

interface Props {
    title:any,
    subtitle:any,
  }

export function AbuutHero(props:Props) {
  return (
    <div  className={classes.wrapper}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

    <Container >

      <div className={classes.inner}>
        {props.title}

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            {props.subtitle}
          </Text>
        </Container>
{/* 
        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div> */}
      </div>
    </Container>

    </div>
  );
}