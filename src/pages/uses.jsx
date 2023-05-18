import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Kyle</title>
        <meta
          name="description"
          content="My tools I use. functional. practical. probably second hand."
        />
      </Head>
      <SimpleLayout
        title="My tools I use. functional. practical. probably second hand."
        intro="For those looking to compare apples to apples - surprise you won! While my mouth salivates at the idea of a Herman Miller setup, saner heads pervail. For now..."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="15” MacBook Pro, i7, 16gb ram (2017)">
              I live by the <em>if it ain&apos;t broke don&apos;t fix it</em>{' '}
              philosophy. Originally, a hand-me-down from my mom. I have spent
              the last 3 years coding with it, and hope to get a few more out of
              it.
            </Tool>
            <Tool title='LG UltaFine 5k 27"'>
              This is one gorgeous monitor. As my fiance says{' '}
              <q>
                you can see every freckles and crease in a person&apos;s skin.
              </q>{' '}
              Originally, purchased off Craigslist it worked great for the first
              year. Now it has a green line down the middle.
            </Tool>
            <Tool title='LG WQHD 34" ergo  Ultrawide'>
              Comes with a built in monitor arm, cable management and decent
              speakers. It is the perfect work horse for making those pixels
              perfect.
            </Tool>
            <Tool title="Logitech MX Mini Keys">
              While the old me considered switch colors like political parties.
              The new me takes a simpler approach. Hot keys? check. tactile key
              stroke? check. Long battery life? check.
            </Tool>
            <Tool title="Craigslist manual standing desk and office chair">
              The desk creaks when you raise it, the chair provides some sort of
              lumbar support, but I only paid $50.00 for both. Beggars
              can&apos;t be choosers right?
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Having struggled to close VIM enough times. VS Code allows me to
              work any type of project, from VR to mobile to web. A true
              craftsman never blames his tools.
            </Tool>
            <Tool title="iTerm2">
              It adds some pretty colors and cool layouts. If you got any tips
              or tricks for iTerm2 hit me up!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I have used a variety of design tools, but my personal favorite is
              figma. A good free tier for the solo guy like myself, but with
              enough features to handle even the largest projects.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
