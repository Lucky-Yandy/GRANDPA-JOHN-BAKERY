
import {useEffect, useState,useCallback} from 'react';

async function sendHttpRequest(url, config){
 
  const response = await fetch(url, config);
  const resData = await response.json();
  
  if (!response.ok){
    throw new Error( resData.message||'sometiong went wrong, failed to send request.');
  }
  
  return resData;

}



export default function useHttp(url,config,initiaData){
  const[data,setData]=useState(initiaData);
  const[isLoading,setIsloading]=useState(false);
  const [error,setError]=useState();
  
  function clearData(){
    setData(initiaData)
  }
  
  const sendRequest = useCallback(async function sendRequest( data){
   setIsloading(true);
   try{
   const resData = await sendHttpRequest(url, {...config,body:data});
   setData(resData);
  
   }catch(error){
   setError(error.message ||'sometiong went wrong')
   }
   setIsloading(false);
 
  },[url,config]);
 
 useEffect(()=>{
  if(config && (config.method ==='GET'||!config.method)||!config){
     sendRequest();
  }
  
 },[sendRequest,config])
 
 return {
 data,
 isLoading,
 error,
 sendRequest,
 clearData
 };
}
