import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Socials.scss'

import Href from 'components/Href/Href'

// import facebook from './images/facebook.svg'
// import twitter from './images/twitter.svg'
// import instagram from './images/instagram.svg'
// import linkedin from './images/linkedin.svg'
// import telegram from './images/telegram.svg'
// import github from './images/github.svg'


const socialImages = {
  facebook: (
    <svg viewBox="0 0 50 50" enableBackground="new 0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029 c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77 L40.43,21.739z"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 50 50" enableBackground="new 0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"/>
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 50 50" enableBackground="new 0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g>
        <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
          c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
        <circle cx="41.5" cy="16.4" r="2.9"/>
        <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
          h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
          s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
          c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
      </g>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 100 100" enableBackground="new 0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <path d="M95,59.727V93H75.71V61.955c0-7.799-2.79-13.121-9.771-13.121 c-5.331,0-8.503,3.587-9.898,7.057c-0.509,1.24-0.64,2.967-0.64,4.703V93H36.104c0,0,0.26-52.58,0-58.028h19.294v8.225   c-0.039,0.062-0.09,0.128-0.127,0.188h0.127v-0.188c2.563-3.948,7.142-9.588,17.389-9.588C85.482,33.609,95,41.903,95,59.727    M15.919,7C9.318,7,5,11.33,5,17.024c0,5.57,4.193,10.031,10.663,10.031h0.129c6.729,0,10.914-4.46,10.914-10.031 C26.579,11.33,22.521,7,15.919,7 M6.146,93h19.289V34.972H6.146V93z"/>
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 100 100" enableBackground="new 0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <path d="M51.474,60.754c-1.733,1.688-3.451,3.348-5.153,5.021 c-0.595,0.586-1.264,0.91-2.118,0.865c-0.583-0.031-0.909-0.287-1.088-0.84c-1.304-4.047-2.627-8.084-3.924-12.135 c-0.126-0.393-0.312-0.584-0.71-0.707c-3.072-0.938-6.138-1.898-9.199-2.871c-0.471-0.15-0.946-0.346-1.353-0.623   c-0.629-0.426-0.721-1.121-0.157-1.621c0.521-0.461,1.143-0.863,1.789-1.119c3.755-1.488,7.53-2.928,11.299-4.381   c9.565-3.693,19.13-7.383,28.696-11.076c1.819-0.703,3.217,0.287,3.028,2.254c-0.121,1.258-0.447,2.496-0.71,3.738   c-2.077,9.807-4.156,19.615-6.244,29.42c-0.496,2.328-2.131,2.936-4.047,1.523c-3.209-2.365-6.415-4.738-9.622-7.107   C51.808,60.984,51.649,60.877,51.474,60.754z M44.271,63.732c0.036-0.01,0.072-0.02,0.108-0.029   c0.02-0.092,0.049-0.182,0.057-0.273c0.206-2.223,0.424-4.445,0.603-6.672c0.04-0.496,0.21-0.848,0.583-1.182   c2.958-2.645,5.898-5.307,8.844-7.963c3.261-2.941,6.523-5.879,9.772-8.832c0.201-0.182,0.285-0.492,0.423-0.744   c-0.306-0.033-0.634-0.156-0.912-0.084c-0.379,0.098-0.738,0.318-1.076,0.531c-7.197,4.533-14.388,9.074-21.59,13.598   c-0.407,0.256-0.483,0.473-0.328,0.92c0.531,1.525,1.014,3.064,1.515,4.6C42.937,59.646,43.604,61.689,44.271,63.732z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 50 50" enableBackground="new 0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <path d="M14.4252739,36.5168887 C14.4252739,36.0671729 14.4094072,34.8772272 14.4003405,33.2968305 C9.2651779,34.440294 8.18170506,30.7588994 8.18170506,30.7588994 C7.34190028,28.5719093 6.13149339,27.9897191 6.13149339,27.9897191 C4.45528384,26.8148801 6.25842744,26.8392833 6.25842744,26.8392833 C8.111438,26.9729198 9.08611021,28.7903759 9.08611021,28.7903759 C10.7328529,31.6827342 13.4064015,30.8483777 14.4592741,30.3638002 C14.6270084,29.1401549 15.1041445,28.3057984 15.6311475,27.8328415 C11.5318575,27.3552363 7.22176626,25.7306815 7.22176626,18.4771257 C7.22176626,16.4109894 7.94143703,14.7213595 9.12237709,13.3977773 C8.93310934,12.9190101 8.29843906,10.9946447 9.30371145,8.38815229 C9.30371145,8.38815229 10.8541203,7.8791716 14.3799404,10.3287864 C15.8521487,9.90928408 17.4320244,9.69778982 19.0028333,9.69081748 C20.5702423,9.69778982 22.1489846,9.90928408 23.624593,10.3287864 C27.1481464,7.8791716 28.6962885,8.38815229 28.6962885,8.38815229 C29.7038276,10.9934827 29.0702907,12.917848 28.8798896,13.3977773 C30.0630963,14.7213595 30.7771004,16.4109894 30.7771004,18.4771257 C30.7771004,25.7492744 26.4602091,27.349426 22.3473191,27.8177347 C23.0114562,28.4022491 23.6007929,29.5573331 23.6007929,31.3236588 C23.6007929,33.8546176 23.5769927,35.8963506 23.5769927,36.5168887 C23.5769927,37.0235453 23.9101946,37.6115458 24.8474666,37.4267788 C32.176775,34.9190612 37.4615385,27.8281932 37.4615385,19.4683597 C37.4615385,9.01333862 29.1949581,0.538461538 18.9994333,0.538461538 C8.80504195,0.538461538 0.538461538,9.01333862 0.538461538,19.4683597 C0.539594878,27.8305174 5.82889166,34.9260335 13.1650001,37.4291029 C14.0875387,37.6022493 14.4252739,37.017735 14.4252739,36.5168887 Z"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 64 64" enableBackground="new 0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" >
	    <g><g id="Icon-Envelope" transform="translate(78.000000, 232.000000)"><path d="M-22.5-213.2l-1.9-1.9l-17.6,17.6c-2.2,2.2-5.9,2.2-8.1,0L-67.7-215l-1.9,1.9l13.1,13.1     l-13.1,13.1l1.9,1.9l13.1-13.1l2.6,2.6c1.6,1.6,3.7,2.5,5.9,2.5s4.3-0.9,5.9-2.5l2.6-2.6l13.1,13.1l1.9-1.9l-13.1-13.1     L-22.5-213.2" id="Fill-3"/><path d="M-26.2-181.6h-39.5c-2.3,0-4.2-1.9-4.2-4.2v-28.2c0-2.3,1.9-4.2,4.2-4.2h39.5     c2.3,0,4.2,1.9,4.2,4.2v28.2C-22-183.5-23.9-181.6-26.2-181.6L-26.2-181.6z M-65.8-215.5c-0.8,0-1.4,0.6-1.4,1.4v28.2     c0,0.8,0.6,1.4,1.4,1.4h39.5c0.8,0,1.4-0.6,1.4-1.4v-28.2c0-0.8-0.6-1.4-1.4-1.4H-65.8L-65.8-215.5z" id="Fill-4"/></g></g>
    </svg>
  ),
}

const Socials = ({ className, colored, emptyWhite, emptyBlack, links }) => (
  <div styleName="socials" className={className}>
    {
      Object.keys(links).map((socialName) => {
        const styleName = cx('social', socialName, {
          'colored': colored,
          'emptyWhite': emptyWhite,
          'emptyBlack': emptyBlack,
        })

        return React.createElement(Href, {
          key: socialName,
          styleName,
          [socialName === 'mail' ? 'mailto' : 'redirect']: links[socialName],
          role: 'social',
        }, socialImages[socialName])
      })
    }
  </div>
)

export default cssModules(Socials, styles, { allowMultiple: true })
