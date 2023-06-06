import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ASSETS, ANIMATIONS, DOCUMENTS } from './workinfo';
import './work.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { lazy } from 'react';
import Slide from 'react-reveal/Slide';
import Iframe from 'react-iframe';




const {
  useCallback,
  useState,
} = React

const CATEGORIES = [
  "Post",
  "Animation",
  "Carousel",
  'Poster',
  'Other'
]


function AssetFilters({categories, onFilterChange}) {
  
  return (
    <section>
       {categories.map(category => (
        <FormControlLabel control = {<Checkbox sx={{'&.Mui-checked': {color: "#ffe4c4"}}}  onChange={onFilterChange} className='.MuiCheckbox-colorPrimary'/>} value = {category}  label = {category} />
       ))} 
    </section>
  )
}


function Asset({asset, width}) {

  
  return (
    <>
    <Slide bottom>
    <div className='projectContainer'>
        <img src = {require('../assets/Design/' + asset.image)} width={width} loading='lazy'/>
            <PhotoView src={require('../assets/Design/' + asset.image)}>
        <div className = "overlay">
            <div className = 'projectInfo'>
                <h2>{asset.title}</h2>
                <p>{asset.description}</p>
            </div>
        </div>
        </PhotoView>
    </div>
    </Slide>
    </>
  )
}

function AssetsList({assets, start , end, width}) {
  
  return (
    <>
      {
      assets.filter(a => a.id >= start && a.id <= end ).map(asset => (
        <Asset asset={asset} width={width}/>
      ))}
    </>
  )
}


function AnimationList({animations, start, end, width}) {
  
  return (
    <>
      {animations.filter(a => a.id >= start && a.id <= end).map(animation => (
        <Animation animation={animation} width = {width}/>
      ))}
    </>
  )
}

function Animation({animation, width}) {
    return(
            <>
            <Slide bottom>
            <div className='projectContainer'>
                  <video width = {width} controls src = {require('../assets/Animation/' + animation.video)} poster= {require('../assets/Animation/posters/' + animation.poster)} />
            </div>
            </Slide>
            </>)
}


function Document({document}) {
    return(
            <>
            <Slide bottom>
              <div className='document'>
                <iframe src ={require('../assets/Design/' + document.pdf)} width={document.width} height={document.height} loading='lazy'/>
              </div>
            </Slide>
            </>);
}

function DocumentList({documents}) {
  
  return (
    <>
      {documents.map(document => (
        <Document document={document}/>
      ))}
    </>
  );
}




export function App() {
  const [state, setState] = useState({
    assets: ASSETS,
    animations: ANIMATIONS,
    documents: DOCUMENTS,
    filters: new Set(),
  })
  
  const handleFilterChange = useCallback(event => {
    setState(previousState => {
      let filters = new Set(previousState.filters)
      let assets = ASSETS
      let animations = ANIMATIONS
      let documents = DOCUMENTS
      
      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }
      
      if (filters.size) {
        assets = assets.filter(asset => {
          return filters.has(asset.category)
        })
      }
      if (filters.size) {
        animations = animations.filter(asset => {
            return filters.has(asset.category)
        })
      }

      if (filters.size) {
        documents = documents.filter(asset => {
            return filters.has(asset.category)
        })
      }
      
      return {
        filters,
        assets,
        animations,
        documents,
      }
    })
  }, [setState])



  function WorkOrder({Poster, General}) {


    return(
        <>
    <PhotoProvider>
        <div className='Assets'>
            <div className='carousel'>
        <AssetsList assets={state.assets} start = '0' end = '1' width='100%' />
            </div>
        <div className='Poster'>
        <AssetsList assets={state.assets} start = '2' end = '3' width={Poster}/>
        </div>
        <AssetsList assets={state.assets} start = '4' end = '7' width={General}/>

        <AnimationList animations={state.animations} width={General}  start = '0' end = '4'/>
        <AnimationList animations={state.animations} width='410px' start = '5' end = '6'/>

        <AssetsList assets={state.assets} start = '8' end = '16' width={General}/>
        <AssetsList assets={state.assets} start = '17' end = '18' width='100%'/>
        <AssetsList assets={state.assets} start = '19' end = '24' width={General}/>
        <DocumentList documents = {state.documents} />
        </div>
    </PhotoProvider>
        </>
    )
  }


  return (
    <>
    <AssetFilters 
    categories={CATEGORIES}
    onFilterChange={handleFilterChange}/>
    <br/><div className='line'/><br/>
    <WorkOrder  General = '265px'/>
      </>
  )
}