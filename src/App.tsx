import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId} />

      <div className="container">
        <Header selectedGenreId={selectedGenreId} />
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  )
}