import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../Context/Context'

const Home = () => {

    const {state, data, loading, setLoading} = useGlobalStates()
    const [fav, setFav] = useState([])

    useEffect(() => {
        setTimeout(( ) => {
            setLoading(false)
        }, 2000)
    }, [state.api])
    
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(fav))
    }, [fav])

    const addFav = (imagen) => {
        setFav([...fav, imagen])
    }
    
  return (
    <div className='card-section'>
        {console.log(data)}
        { loading ? 'Cargando...'
        :
        state.api === 'dog' ?
            data.message?.map((imagen, index) => <div key={index} className='card'>
                <img src={imagen}  alt='' width={200} />
                <button onClick={() => addFav(imagen)}>⭐</button>
            </div>
            )
            :
            data.map(imagen => (
                <div className='card' >
                    <img src={imagen.url} alt="" width={200}  />
                    <button onClick={() => addFav(imagen)}>⭐</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home