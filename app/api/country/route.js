import {NextResponse} from "next/server";
import {WebServiceClient} from "@maxmind/geoip2-node";


async function ParseUrl(req){

}
export async function GET(req, res) {


    try {
        const parsedUrl = new URL(req.nextUrl.href, `https://${req.nextUrl.host}`);
        const userIP =   parsedUrl.searchParams.get('address');
        console.log(parsedUrl)
        const license = process.env.MAXMIND_LICENSE_KEY ;
        const account_id = process.env.ACCOUNT_ID;
        const option = {
            'host' : 'geolite.info'
        };
        const client = new WebServiceClient(account_id, license,option);
        // Get the user's IP address from the request context
        try {
            const country = await client.city(userIP)
            return NextResponse.json({
                Location : country
            })
        }catch (e){
             console.log('error')
            return NextResponse.json({
                error :'IP_ADDRESS_INVALID',
            })
        }

    }catch (e){
         console.log(e)
    }


}