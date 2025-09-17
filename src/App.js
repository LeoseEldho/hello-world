import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import Functionclick from './components/functionclick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/eventbind';
import Parentcomponent from './components/parentcomponent';
import Usergreeting from './components/usergreeting';
import Namelist from './components/namelist';
import Stylesheet from './components/stylesheet';
import Inline from './components/inline';
import  "./appstyle.css"
import style from './appstyle.module.css'
import Form from './components/form';
import Lifecyclea from './components/lifecyclea'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/table';
import MyPureComponent from './components/MyPureComponent';
import Parentcom from './components/Parentcom';
import RefsDemo from './components/RefsDemo';
import Focusinput from './components/focusinput';
import Frparent from './components/Frparent';
import Portaldemo from './components/portaldemo';
import Hero from './components/hero';
import Errorboundary from './components/errorboundary';
import Clickcounter from './components/clickcounter';
import HoverCounter from './components/hoverCounter';
import ClickCountTwo from './components/clickCountTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/user';
import CounterRender from './components/CounterRender';
import CompoentC from './components/ComponentC';
import { UserProvider } from './components/UserContex';


function App() {
  return (
    <div className="App">
      <UserProvider value="thor">
        <CompoentC></CompoentC>
      </UserProvider>
      {/* <CounterRender render={(count,clickHandler)=>(
        <ClickCountTwo count={count} clickHandler={clickHandler}/>
      )}/>
      <CounterRender render={(count,clickHandler)=>(
        <HoverCounterTwo count={count} clickHandler={clickHandler}/>
      )}/> */}
      {/* <ClickCountTwo></ClickCountTwo>
      <HoverCounterTwo></HoverCounterTwo> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn?'marvel':"Login First"}></User> */}
      {/* <HoverCounter></HoverCounter> */}
      {/* <Clickcounter name="thor"></Clickcounter> */}
      {/* <Errorboundary>
      <Hero heroname={"thor"}></Hero>
      <Hero heroname={'superman'}></Hero>
      <Hero heroname={"jocker"}></Hero>
      </Errorboundary> */}
      {/* <Portaldemo></Portaldemo> */}
      {/* <Frparent></Frparent> */}
      {/* <Focusinput></Focusinput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <Parentcom></Parentcom> */}
      {/* <MyPureComponent></MyPureComponent> */}
      {/* <Table></Table> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Lifecyclea></Lifecyclea> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={style.success}>success</h1> */}
      {/* <Inline></Inline> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Namelist></Namelist> */}
      {/* <Usergreeting></Usergreeting> */}
      {/* <Parentcomponent></Parentcomponent> */}
      {/* <Eventbind></Eventbind> */}
      {/* <Counter></Counter> */}
    {/* <Functionclick></Functionclick> */}
    {/* <ClassClick></ClassClick> */}
      {/* <Message></Message> */}
      
   {/* <Greet name="bruce" heroName="batman"><p>this is props</p></Greet> */}
    {/* <Greet name="messi" heroName="goat"><button>click</button></Greet> */}
    {/* <Greet name="leo" heroName="leo"></Greet> */}

    {/* <Welcome name="bruce" heroName="batman"></Welcome> */}
    {/* <Welcome name="tony" heroName="ironman"></Welcome> */}
    {/* <Welcome name="clark" heroName="superman"></Welcome>  */}
    {/* <Hello/>*/}
    </div>
  );
}

export default App;


