import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

 const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }

}

export async function GET(request:NextRequest) {
    try{
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id:userId}).select("-password")

        return NextResponse.json({
            message:"User found",
            data:user
        })
    }catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }

}   