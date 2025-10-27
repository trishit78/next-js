import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function GET(request:NextRequest) {
    try{
    const response=NextResponse.json({
            message:"logged out",
            success:true
        })

        response.cookies.set("token","",{
            httpOnly:true
        },{expiresIn:new Date(0)})


        return response
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        })
    }
}