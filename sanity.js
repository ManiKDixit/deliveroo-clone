import  {createClient} from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";



const client = createClient({
    projectId:"",
    dataset:"production",
    useCdn: true,
    apiVersion:"2022-03-07"
});


const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);

//RUNT HIS to add exception for localhost 3000 CORS policy
//sanity cors add http://localhost:3000


export default client
