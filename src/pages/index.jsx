import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Experience } from '@/components/Experience'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/amanda.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Hey it&apos;s Kyle</title>
        <meta
          name="description"
          content="I’m Kyle. I write clean code, read economics books and obsess over pixels."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Kyle. I write clean code, read economics books and obsess over
              pixels.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a frontend engineer with 4+ years of experience. I have
                worked in a wide array of team environments, tech stacks and
                application types. From helping lead the web marketing effort at a
                multi billion dollar conglomerate, to wearing all the hats at
                small start-ups.
              </p>
              <p>
                I spent two and a half years growing at Lead Sherpa. My time was spent
                perfecting my craft with React and learning the best practices
                of developing a maintainable and most importantly developing a collaborative culture. While at Lead Sherpa I was promoted from frontend engineer, to senior frontend engineer.
              </p>
              <p>
                Minimalism and simplicity are key values in every aspect of my
                life, especially development. Clean, readable code and quality
                test coverage are the fundamental attributes to a quality
                application. Professionally, I have coded with Javascript; however, I have experience in a plethora of other languages.
              </p>
              <p>
                When I am not working you can find me, cooking, reading or
                training for a triathlon. I am a life long learner, AFoL (Adult Fan of Legos)
                and personal finance nerd. You can checkout my current
                projects on my GitHub. If you have a question, looking for
                a dev or a friend feel free to reach out.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <Experience />
            <ul role="list">
              <SocialLink
                href="https://github.com/kylekrny"
                icon={GitHubIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:hello@kyleswork.com"
                icon={MailIcon}
                className="mt-4"
              >
                hello@kyleswork.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
