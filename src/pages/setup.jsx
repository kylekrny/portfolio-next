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
        <title>Setup - Kyle</title>
        <meta
          name="description"
          content="My tools I use. functional. practical. probably second hand."
        />
      </Head>
      <SimpleLayout
        title="My tools I use. functional. practical. probably second hand."
        intro="For those looking to compare apples to apples - your apples are better. While my mouth salivates at the idea of a Herman Miller setup, saner heads pervail. For now..."
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
                you can see every freckle and crease in a person&apos;s skin.
              </q>{' '}
              Originally, purchased off Craigslist it worked great for the first
              year. Now it has a dead line of pixels down the middle.
            </Tool>
            <Tool title="Logitech MX Mini Keys">
              While the old me considered switch colors like political parties.
              The new me takes a simpler approach. Hot keys? check. tactile key
              stroke? check. Long battery life? check.
            </Tool>
            <Tool title="SHW Automatic Standing Desk">
              Nice automatic standing desk, that has never been risen in the
              time I own it.
            </Tool>
            <Tool title="Poppin Task Chair">
              Purchased 4 of them off craigslist for $100, sold 3 for $80 each. Now I have a comfy chair and an extra $140 in my pocket.
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
