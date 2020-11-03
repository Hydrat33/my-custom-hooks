import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  
  const isDismount = useRef(true);

  const [state, setstate] = useState({
    loading: true,
    data: null,
    error: null,
  });


  useEffect(() => {
    return ()=> {

      isDismount.current=false
    }
  }, []);


  useEffect(() => {

    
    setstate({
      loading: true,
      data: null,
      error: null,
    });

   
      fetch(url)
        .then((res) => res.json())
        .then((json) =>{

          
         if(isDismount.current){

           setstate({
             loading: false,
             data: json,
             error: null,
            })
            
          } 
        }).catch(()=>{

          setstate({...state,error:'No se encontraron los resultados'})
        });
          
    
        
  }, [url]);

  return state;
};
