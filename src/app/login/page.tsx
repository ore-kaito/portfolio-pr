"use client"


import SnsAuthPage from "../components/Login/SnsAuthButton/SnsAuthPage"

export default function LoginPage() {
  return (
    <div className="w-3/5 my-0 m-auto">
      <h2 className="font-bold text-3xl text-center">ログイン</h2>
      <SnsAuthPage />

    </div>
    
  )
}
