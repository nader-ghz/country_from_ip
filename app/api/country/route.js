import {NextResponse} from "next/server";
import maxmind from 'maxmind';
export async function GET(req, res) {
    const geolocationDatabase = await maxmind.open('/assets/GeoLite2/GeoLite2-Country.mmdb');
    // Get the user's IP address from the request context
    const userIP = req.headers['x-forwarded-for'] || '102.156.93.242';
    const geolocationResult = geolocationDatabase.get(userIP);
    return NextResponse.json({
        test : 'hi'
    })
}