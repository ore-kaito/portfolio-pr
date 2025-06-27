"use client"
type ButtonProps = {
  label: string
}

export default function Button({ label }: ButtonProps) {

  
  return (
    <div className="ml-4 bg-black text-white py-2 px-4 rounded">{label}</div>
  )
}