type nameList = {
  name:string
}

export const axios = (url:string):Promise<nameList[]> =>{
  return new Promise((resolve)=>{
    const xhr = new XMLHttpRequest()
    xhr.open('get',url)
    xhr.onreadystatechange = () =>{
      if (xhr.status===200 && xhr.readyState===4) {
        setTimeout(()=>{
          resolve(JSON.parse(xhr.responseText))
        },2000)
      }
    }
    xhr.send(null)
  })
}