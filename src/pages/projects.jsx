import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoLeadSherpa from '@/images/logos/lead-sherpa-logo.jpeg'
import logoSplunk from '@/images/logos/splunk-logo.svg'
import logoPersonal from '@/images/logos/personal-logo.svg'
import logoFrenchSquirrel from '@/images/logos/french-squirrel-logo.svg'
import logoJones from '@/images/logos/jones-logo.svg'

const projects = [
  {
    name: 'Listing Guesser',
    description:
      'a small MVP I made to test the concept of a listing guesser game utilizing Remix. Not fully refined, but functional and quirky.',
    link: {
      href: 'https://list-guesser.web.app',
      label: 'list-guesser.web.app',
    },
    logo: logoPersonal,
  },
  {
    name: 'Economic Impact of Data',
    description:
      'An global marketing campaign for Splunk. I was responsible for managing the production of all web assets.',
    link: {
      href: 'https://www.splunk.com/en_us/campaigns/economic-impact-of-data.html',
      label: 'splunk.com',
    },
    logo: logoSplunk,
  },
  {
    name: '10DLC Compliant SMS',
    description:
      'Architected a sms system that was 10DLC compliant. We beat our competitors to market by a year.',
    link: { href: 'https://leadsherpa.com/sms/', label: 'leadsherpa.com' },
    logo: logoLeadSherpa,
  },
  {
    name: 'Propstack',
    description:
      'An list management system allowing our customers to effectively manage millions of records and target the right leads.',
    link: {
      href: 'https://leadsherpa.com/propstack/',
      label: 'leadsherpa.com',
    },
    logo: logoLeadSherpa,
  },
  {
    name: 'French Squirrel Store',
    description:
      'French Squirrel sells blood sugar balancing berets and bateaux, they needed a site to match their loving and caring energy.',
    link: { href: 'https://frenchsquirrel.com', label: 'frenchsquirrel.com' },
    logo: logoFrenchSquirrel,
  },
  {
    name: 'Jones Bodywork',
    description:
      'Jeff Jones a great bodyworker was in need of a site that showed his down to earth personality. This was also my first paid project.',
    link: { href: 'https://jonesbodywork.com', label: 'jonesbodywork.com' },
    logo: logoJones,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Kyle</title>
        <meta
          name="description"
          content="The building blocks that have made my career."
        />
      </Head>
      <SimpleLayout
        title="The building blocks that have made my career."
        intro="I have had the pleasure of working in many different team dynamics, with many different clients and in many different industries. Here is a showcase of some of the work I have done. If you have any questions please feel free to reach out."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
