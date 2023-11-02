import Image from 'next/image'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar></Navbar>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 mb-6"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >   
          <div className={'image-container'}>
            <Image
              src={'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/SqAZjEqqBAYvyu3KSrWq1d0QLB.jpg'}
              alt=""
              className={'image'}
              layout='fill'
              priority
            />
          </div>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/original/blQaj6biyBMLo34cuFKKwbgjIBz.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Locked In (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A kindly nurse tries to unlock the secrets of a coma patient's injury. 
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Pain Hustlers (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An American excess story.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h34UytWk6nw91wDt2Ts3UYsRWqe.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            John Wick: Chapter 4 (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            No way back, one way out.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5EduOlOAPX1t9FslccJvILbv8co.jpg'}
                alt="Taxi Driver"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Taxi Driver (1976) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            On every street in every city, there's a nobody who dreams of being a somebody.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/original/blQaj6biyBMLo34cuFKKwbgjIBz.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Locked In (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A kindly nurse tries to unlock the secrets of a coma patient's injury. 
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Pain Hustlers (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An American excess story.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h34UytWk6nw91wDt2Ts3UYsRWqe.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            John Wick: Chapter 4 (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            No way back, one way out.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5EduOlOAPX1t9FslccJvILbv8co.jpg'}
                alt="Taxi Driver"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Taxi Driver (1976) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            On every street in every city, there's a nobody who dreams of being a somebody.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/original/blQaj6biyBMLo34cuFKKwbgjIBz.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Locked In (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A kindly nurse tries to unlock the secrets of a coma patient's injury. 
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Pain Hustlers (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An American excess story.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h34UytWk6nw91wDt2Ts3UYsRWqe.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            John Wick: Chapter 4 (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            No way back, one way out.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5EduOlOAPX1t9FslccJvILbv8co.jpg'}
                alt="Taxi Driver"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Taxi Driver (1976) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            On every street in every city, there's a nobody who dreams of being a somebody.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/original/blQaj6biyBMLo34cuFKKwbgjIBz.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Locked In (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A kindly nurse tries to unlock the secrets of a coma patient's injury. 
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Pain Hustlers (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An American excess story.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h34UytWk6nw91wDt2Ts3UYsRWqe.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            John Wick: Chapter 4 (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            No way back, one way out.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5EduOlOAPX1t9FslccJvILbv8co.jpg'}
                alt="Taxi Driver"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Taxi Driver (1976) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            On every street in every city, there's a nobody who dreams of being a somebody.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/original/blQaj6biyBMLo34cuFKKwbgjIBz.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Locked In (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A kindly nurse tries to unlock the secrets of a coma patient's injury. 
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Pain Hustlers (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An American excess story.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h34UytWk6nw91wDt2Ts3UYsRWqe.jpg'}
                alt="Movie Picture"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            John Wick: Chapter 4 (2023) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            No way back, one way out.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          <Image
                src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5EduOlOAPX1t9FslccJvILbv8co.jpg'}
                alt="Taxi Driver"
                width={100}
                height={24}
                priority
              />
            <h2 className={`mb-3 text-lg font-semibold`}>
            Taxi Driver (1976) 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            On every street in every city, there's a nobody who dreams of being a somebody.
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
