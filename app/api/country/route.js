import {NextResponse} from "next/server";
import {WebServiceClient} from "@maxmind/geoip2-node";


async function ParseUrl(req){

}
export async function GET(req, res) {

    const parsedUrl = new URL(req.nextUrl.href, `https://${req.nextUrl.host}`);
    const userIP =   parsedUrl.searchParams.get('address');
    console.log(userIP)
    try {

        const license = process.env.MAXMIND_LICENSE_KEY ;
        const account_id = process.env.ACCOUNT_ID;
        const option = {
            'host' : 'geolite.info'
        };
        const client = new WebServiceClient(account_id, license,option);
        // Get the user's IP address from the request context
        try {
            const country = await client.country(userIP)
            console.log(country)
            return NextResponse.json({
                Location :{
                    continent : {
                        code : country.continent.code,
                        name : country.continent.names.en
                    },
                    country : {
                        code : country.registeredCountry.isoCode,
                        name: country.registeredCountry.names.en
                    },
                    traits : country.traits,
                } ,
            })
        }catch (e){
             console.log('error')
            return NextResponse.json({
                error :'IP_ADDRESS',
                Url : parsedUrl,
                userIP : userIP
            })
        }

    }catch (e){
         console.log(e)
    }


}