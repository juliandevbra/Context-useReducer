import React, { useEffect } from 'react'
import { useGlobalStates } from '../Context/Context'

const Home = () => {

    const {state, data, loading, setLoading} = useGlobalStates()

    useEffect(() => {
        setTimeout(( ) => {
            setLoading(false)
        }, 2000)
    }, [state.api])

  return (
    <div className='card-section'>
        {console.log(data)}
        { loading ? 'Cargando...'
        :
        state.api === 'dog' ?
            data.message?.map((imagen, index) => <div key={index} className='card'>
                <img src={imagen}  alt='' width={200} />
            </div>
            )
            :
            data.map(imagen => (
                <div className='card' >
                    <img src={imagen.url} alt="" width={200}  />
                </div>
            ))
        }
    </div>
  )
}

export default Home