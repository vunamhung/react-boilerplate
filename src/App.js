import React from 'react';
import logo from '@/assets/images/logo.svg';
import '@/assets/styles/index.css';
import Sep from '@/components/Sep';
import Button from '@/components/Button';

export default function App() {
  return (
    <div className='text-center'>
      <header className='bg-neutral-800 min-h-screen flex items-center justify-center text-white flex-col'>
        <img src={logo} className='logo' alt='logo' />
        <div className='sep' />
        <div>
          <Button className='mr-2' tone='neutral'>
            Button
          </Button>
          <Button className='mr-2' tone='primary'>
            Button
          </Button>
          <Button className='mr-2' tone='success'>
            Button
          </Button>
          <Button className='mr-2' tone='warning'>
            Button
          </Button>
          <Button className='mr-2' tone='danger'>
            Button
          </Button>
          <Button className='mr-2' tone='info'>
            Button
          </Button>
          <Button className='mr-2' tone='urge'>
            Button
          </Button>
        </div>
        <Sep />
        <div>
          <Button className='mr-2' tone='primary' priority='high' size='small'>
            Small Button
          </Button>
          <Button className='mr-2' tone='success' priority='high'>
            Normal Button
          </Button>
          <Button className='mr-2' tone='danger' priority='high' size='large'>
            Large Button
          </Button>
        </div>
        <Sep />
        <div className='container max-w-2xl'>
          <div className='md:grid grid-cols-2 gap-4'>
            <section className='card ~neutral content'>
              <h4>~neutral</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>

            <section className='card ~primary content'>
              <h4>~primary</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>

            <section className='card ~success content'>
              <h4>~success</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>

            <section className='card ~warning content'>
              <h4>~warning</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>

            <section className='card ~danger content'>
              <h4>~danger</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>

            <section className='card ~info content'>
              <h4>~info</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>

            <section className='card ~urge content'>
              <h4>~urge</h4>
              <p>Lorem ipsum dolor sit amet. This is a box. Be careful &mdash; you never know what's inside!</p>
            </section>
          </div>
        </div>
        <Sep />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='text-teal-500' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <div className='sep' />
      </header>
    </div>
  );
}
