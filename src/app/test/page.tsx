import Image from "next/image";

export default function TestPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative w-[500px] h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop"
          alt="Test image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
} 