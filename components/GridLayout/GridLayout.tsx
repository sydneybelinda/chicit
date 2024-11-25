"use client"

import React from 'react';

import { Grid } from '@mantine/core';

interface Props {
  left:any,
  right:any,
}

function GridLayout(props: Props) {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>  {props.left}</Grid.Col>
    
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>   {props.right}</Grid.Col>
   
    </Grid>
  );
}

export default GridLayout