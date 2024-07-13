/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// app/api/primes/route.ts
import { isPrime } from '~/server/isPrime';

async function calculatePrimes(count: number) {

  const primes: number[] = [];
  let num = 2;

  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  
  return primes;
}



export default async function HomePage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const count = parseInt(searchParams.count as string) || 10;
  const primes = await calculatePrimes(count);

  return (
    <main>
      <h1>First {count} Prime Numbers</h1>
      <div className="flex flex-wrap gap-4 p-4 text-center ">
        {primes.map((prime) => (
          <p className='w-16' key={prime}>{prime}</p>
        ))}
      </div>
    </main>
  );
}
