import React from 'react';
import star from './assets/icon-star.svg';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';
import { motion, AnimatePresence} from 'framer-motion';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <section className="font-workSans">
          <div className="w-full bg-hero-pattern h-[40vh] bg-cover bg-center lg:bg-hero-pattern-large relative"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-44 mx-6 bg-white rounded-md p-5 border shadow-lg md:mx-36 lg:mx-72 xl:mx-[30rem]"
          >
            <div className="flex items-center gap-7 flex-row-reverse justify-end">
              <h2 className="font-semibold text-5xl">FAQs</h2>
              <img src={star} alt="star" loading="lazy" />
            </div>
            <Panel
              title="What is Frontend Mentor, and how will it help me?"
              alt="plus"
              isActive={value === 0}
              onshow={() => setValue(0)}
            >
              {' '}
              Frontend Mentor offers realistic coding challenges to help developers
              improve their frontend coding skills with projects in HTML, CSS, and
              JavaScript. It's suitable for all levels and ideal for portfolio building.
            </Panel>

            <Panel
              title="Is Frontend Mentor free?"
              alt="plus"
              isActive={value === 1}
              onshow={() => setValue(1)}
            >
              {' '}
              Yes, Frontend Mentor offers both free and premium coding challenges, with
              the free option providing access to a range of projects suitable for all
              skill levels.
            </Panel>

            <Panel
              title="Can I use Frontend Mentor projects in my portfolio?"
              alt="plus"
              isActive={value === 2}
              onshow={() => setValue(2)}
            >
              {' '}
              Yes, you can use projects completed on Frontend Mentor in your portfolio.
              It's an excellent way to showcase your skills to potential employers!
            </Panel>

            <Panel
              title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
              alt="plus"
              isActive={value === 3}
              onshow={() => setValue(3)}
            >
              {' '}
              The best place to get help is inside Frontend Mentor's Discord community.
              There's a help channel where you can ask questions and seek support from
              other community members.
            </Panel>
          </motion.div>
      </section>
    </>
  );
}

function Panel({ title, children, alt, onshow, isActive }) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between py-6 gap-5">
          <h4 className="font-semibold hover:text-purple-600 transition-all duration-300 ease-in-out cursor-pointer">
            {title}
          </h4>
          <motion.img
            src={isActive ? minus : plus}
            alt={alt}
            className="cursor-pointer"
            loading="lazy"
            onClick={onshow}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
        </div>
        <AnimatePresence>
          {isActive ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 cursor-pointer"
            >
              <p>{children}</p>
            </motion.div>
          ) : (
            ' '
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
