//import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaClient } from '../../generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await client.user.create({
      data: {
        email,
        password,
      },
    });

    console.log('User created successfully:', user);
    return NextResponse.json({ message: 'User created', user });
  } catch (error) {
    console.error('Signup Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}