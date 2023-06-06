import { useState } from 'react';
import { Transition, Paper, Button, rem } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <>
        <button>one type</button>
      <Transition mounted={opened} transition="rotate-right" duration={200} timingFunction="ease">
        {(styles) => (
            <div>
            <p>let's test this</p>
            </div>
        )}
      </Transition>
    </>
  );
}

export default function Test() {
    return (
        <Demo />
    )
}