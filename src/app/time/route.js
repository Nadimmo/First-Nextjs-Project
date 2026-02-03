export async function GET(){
   const  currentTime =  new Date().toLocaleTimeString()
    return Response.json(currentTime)
}