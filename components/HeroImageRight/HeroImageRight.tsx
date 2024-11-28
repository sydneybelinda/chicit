import { Button, Container, Text, Title } from '@mantine/core';
import classes from './page.module.css';
import BackgroundImage from '../BackgroundImage';
import Background from "./blue-bg-wiith-girl-right.jpg"

// const backImg = {backgroundImage: 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(' + image + ')'}

interface Props{
    image:any,
    title: any,
    subtitle:any
}

export function HeroImageRight(props:Props) {



    // console.log(image)
  return (
    <div className={classes.root}>
        <BackgroundImage
            image={props.image}
        />
      <Container className={classes.rel}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{props.title}
            </Title>

            <Text className={classes.description} mt={30}>
{props.subtitle}
            </Text>

          </div>
        </div>
      </Container>
    </div>
  );
}