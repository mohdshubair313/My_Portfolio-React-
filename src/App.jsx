import { About, Banner, Contact, Header, Nav, Projects, Work} from './Components';

function App() {
  return (
    <div className='bg-color bg-no-repeat bg-cover overflow-hidden text-white'>
      <Header />
      <Banner />
      <Nav />
      <About/>
      <Projects />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App
