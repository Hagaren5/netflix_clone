import React from 'react'

import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Row from '../components/Row'
import classes from './HomeScreen.module.css'
import requests from '../lib/Requests'

function HomeScreen() {
  return (
    <div className={classes.homeScreen}>
      <Nav />

      <Banner />

      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending now" fetchURL={requests.fetchTrending} />
      <Row title="Top rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
