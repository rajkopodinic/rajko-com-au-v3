import Head from 'next/head'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, CheckCircleIcon } from '@heroicons/react/outline'

const features = [
  {
    title: 'MarTech & Analytics Tech Lead',
    company: 'Westpac Group',
    dates: 'NOV 2021 - PRESENT',
    icon: CheckCircleIcon,
  },
  {
    title: 'Founder',
    company: 'DigitalPod Australia',
    dates: 'DEC 2020 - PRESENT',
    icon: CheckCircleIcon,
  }
]
const features2 = [
  {
    title: 'Solutions Consultant',
    company: 'Venntifact',
    dates: 'OCT 2021 - NOV 2021',
    icon: CheckCircleIcon,
  },
  {
    title: 'Associate Consultant',
    company: 'Venntifact',
    dates: 'AUG 2020 - OCT 2021',
    icon: CheckCircleIcon,
  },
  {
    title: 'Front End Developer',
    company: 'ZOZO Marketing',
    dates: 'JUN 2019 - AUG 2020',
    icon: CheckCircleIcon,
  },
  {
    title: 'WordPress Developer',
    company: 'ZOZO Marketing',
    dates: 'JUN 2017 - JUN 2019',
    icon: CheckCircleIcon,
  },
  {
    title: 'Marketing Intern',
    company: 'ZOZO Marketing',
    dates: 'JAN 2016 - JUN 2017',
    icon: CheckCircleIcon,
  },
  {
    title: 'IT Support',
    company: 'ITV STUDIOS AUSTRALIA',
    dates: 'JAN 2020 - AUG 2020',
    icon: CheckCircleIcon,
  },
  {
    title: 'IT Assistant',
    company: 'ITV STUDIOS AUSTRALIA',
    dates: 'JAN 2018 - JAN 2020',
    icon: CheckCircleIcon,
  }
]

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <>
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-base font-semibold text-blue-700 tracking-wide uppercase">Hi, my name is</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Rajko Podinic
            </p>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              I’m a MarTech & Analytics Tech Lead at Westpac Group.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Experience</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">10Y</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Fanatic</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">JS</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Class of 2019</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">UTS</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Where I've Worked</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              My Experience
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Over the last 10+ years, my career has spanned many different companies from family businesses to one of the "big four" banks in Australia & starting a boutique digital agency.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.dates}</dd>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.company}</dd>
                </div>
              ))}
              {features2.map((feature) => (
                <div key={feature.title} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-200 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.dates}</dd>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.company}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
