import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';



function App({text, subText}) {
  const frontEndskills = ['javascript','typescript','angualr.js','react'];
  const backEndskills = ['php','C#','Node.js','Java','Rust','Go','python']

  return (
    <>
      <Header text='React and Vite are amazing... ' subText="React apps are made up of components"/>
      <Content skills ={backEndskills} />
      <Footer></Footer>
    </>
  )
}

export default App
