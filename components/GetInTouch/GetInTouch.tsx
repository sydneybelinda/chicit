"use client"

import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry } from '@/utils/actions';

import bg from './bg.svg';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';


const initialState = {
  message: "",
};


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
<>
    <Button type="submit" className={classes.control} aria-disabled={pending} disabled={pending}>
      Send message
    </Button>

    { pending==true
      ? <div className={classes.submitting}>Submitting...</div>
      : ""
    }

</>
  );
 

}


export function GetInTouch() {

  const [state, formAction] = useActionState(submitEnquiry, initialState);






  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });



  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} action={formAction}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name"
                placeholder="Your name"
                name='name'
                id='name'
                disabled={useFormStatus().pending}

              />
              <TextInput
                label="Your email"
                placeholder="hello@gmail.com"
                name='email'
                id='email'
                disabled={useFormStatus().pending}


                required />

<TextInput
                label="Your Phone"
                placeholder="xxxx xxxx"
                name='phone'
                id='phone'
                disabled={useFormStatus().pending}
                required />
            </SimpleGrid>


            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={10}
              name="msg"
              id="msg"
              disabled={useFormStatus().pending}
            />

            <Group justify="flex-end" mt="md">
            <SubmitButton />

      
            </Group>

            {useFormStatus().pending

            }

           {state.message == "success"
              ?  <div className={classes.success} >Message has been recieved successfully</div>
              : ''
          }

{state.message == "failed"
              ?  <div className={classes.failed}>Message Sending Has Failed</div>
              : ''
          }
          </div>
        </form>
      </div>
    </Paper>
  );
}