export default `// Automatic image optimization with next/image
import Image from 'next/image'

function ProfilePage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={300}
      height={300}
      // Automatic: WebP conversion, lazy loading, 
      // responsive images, blur placeholder
    />
  )
}`;
