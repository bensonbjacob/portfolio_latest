'use client';

import React from 'react';
import Heading from './heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <Heading>My Projects</Heading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
