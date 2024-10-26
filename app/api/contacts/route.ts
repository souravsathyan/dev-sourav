import { sendMail } from '@/lib/send-mail'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  try {
    const result = await sendMail(data)
    console.log(result)
    return NextResponse.json({
      message: 'Data saved successfully',
      data: {
        result
      }
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 })
  }
  // Handle POST request
}
