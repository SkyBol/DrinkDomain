
import styled from 'styled-components';
import './CarouselStyle.css';

const Carousel = () => {

    const CardList = styled.ul<{ count: number }>`
  --count: ${({ count }) => count};
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  outline: 2px dotted magenta;
  z-index: 1;
`;

  return (
    <div className="void" id="void">
      <div className="crop">
        <CardList count={6}>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          <li className='list'>
            <div className="card">
              <a href="">
                <span className="model-name">Gretel-ACTGAN</span>
                <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
              </a>
            </div>
          </li>
          </CardList>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      <div className="center-circle"></div>
    </div>
  );
};

export default Carousel;
