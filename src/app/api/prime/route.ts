// app/api/primes/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { isPrime } from '~/server/isPrime';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const count = parseInt(searchParams.get('count')!) || 10;
  
  const primes: number[] = [];
  let num = 2;

  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  
  return NextResponse.json({ primes });
}

