import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Works from "./components/Works"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home title={`### Confiez vos rêves à des experts du Web`} text="Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
          Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale."/>}/>
          <Route path="/about" element={<About title={`### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.`} text="De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
          Laissez votre projet entre des mains dignes de confiance, ayant accompagné 'PLATON', 'TCar', 'Solane' ou encore 'Sedal' vers le sommet."/>}/>
          <Route path="/works" element={<Works title={`### Au fil des années, nous avons pu accompagner les meilleurs.`} text="Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées."/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
